// 加载gulp模块
const gulp = require('gulp')
    //合并模块
const concat = require('gulp-concat')
    // js压缩
const uglify = require('gulp-uglify')
    //css压缩
const minifyCss = require('gulp-minify-css')
    //html压缩
const minifyHtml = require('gulp-minify-html')
    //images
const minImg = require('gulp-imagemin')
    // rename
const rename = require('gulp-rename')
    //自动加载
const auto = require('gulp-connect')
    // es6转es5
const babel = require('gulp-babel')
    //打印错误
    // const gutil = require('gulp-util');
    // const pump = require('pump')



//合并压缩css
gulp.task('minCss', function() {
    return gulp.src(['./css/*.css', '!./css/swiper*.css', '!./css/iconfont.css', '!./css/Jin_comment.css'])
        .pipe(concat('main.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css'))
        .pipe(auto.reload())
})

//合并压缩js
gulp.task('minJs', function() {
    return gulp.src(['./js/*.js', '!./js/jquery*.js', '!./js/swiper*.js', '!./js/tool.js', '!./js/Jin_comment.js'])
        // .pipe(concat('main.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(auto.reload())


})



//把swiper.min.css iconfont添加到dist
gulp.task('addCss', function() {
    return gulp.src(['./css/swiper*.css', './css/iconfont.css', './css/Jin_comment.css'])
        .pipe(gulp.dest('./dist/css'))
})

//把jquery.min.js swiper.min.js 添加到dist
gulp.task('addJs', function() {
    return gulp.src(['./js/jquery*.js', './js/swiper*.js', './js/tool.js', './js/Jin_comment.js'])
        .pipe(gulp.dest('./dist/js'))
})

// 压缩html
gulp.task('minHtml', function() {
    return gulp.src('./*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('./dist'))
        .pipe(auto.reload())
})

//压缩图片

gulp.task('minImages', function() {
    return gulp.src(['./images/*.*', './imgs/*.*', './Jin_footer_img/*.*'])
        // .pipe(minImg())
        .pipe(gulp.dest('./dist/images'))
        // .pipe(auto.reload())
});

// es6转es5
gulp.task('es62es5', function() { //es6 to es5
    return gulp.src(['./js/*.js', '!./js/jquery*.js', '!./js/swiper*.js', '!./js/tool.js', '!./js/Jin_comment.js'])
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(gulp.dest('./dist/js'))
});





//自动刷新
gulp.task('reload', function(done) {
    auto.server({
        livereload: true
    })
    done()
})



// 监视
gulp.task('watch', function() {
    gulp.watch('./css/*.css', gulp.series('minCss')) //监视css变化
    gulp.watch('./js/*.js', gulp.series('minJs')) //监视js变化
    gulp.watch('./*.html', gulp.series('minHtml')) //监视html变化
    gulp.watch('./images/*.*', gulp.series('minImages')) //监视img变化
})

//实时更新
gulp.task('run', gulp.series('reload', 'watch'))

//初始化
gulp.task('build', gulp.parallel( //init
    gulp.series('minCss'),
    gulp.series('minJs'),
    gulp.series('minHtml'),
    gulp.series('minImages'),
    // gulp.series('es62es5')


))