
(function () {
    //登录拦截
    window.onload = function(){
        if(!(localStorage.getItem('admin'))){
            alert('您还未登录');
            window.location.assign('jy_back-login.html');
        }else{
            alert('欢迎回来');
        }
    }
    //layui初始化
    layui.use('element', function () {
        var element = layui.element;
    });

    // iframe切换
    var dds = document.querySelectorAll('.layui-side .layui-nav-child a');
    // console.log(dds);
    for (let i = 0, len = dds.length; i < len; i++) {
        dds[i].onclick = function () {
            var iframe = document.querySelector('iframe');
            iframe.src = this.getAttribute('data-url');
        }
    }

    //退出
    document.querySelector('#exit').onclick = function(){
        localStorage.removeItem('admin');
    }
})();