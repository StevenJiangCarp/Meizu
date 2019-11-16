## 魅族商城
### 负责内容
- 登陆注册模块
- 后台管理系统
### 项目功能
1. 正则校验：
 + 参考三大运营商手机号段以及出于安全性考虑对帐号密码进行格式校验。
   + 暂无踩坑记录，实现简单，效果明显。需要注意的就是成功之后的提示，以及失败的提示展示的逻辑关系。
2. 验证码：
   + 一是随机验证码，二是短信验证码。
   + 随机验证码封装成函数，多处使用。
   + 短信验证码需要第三方API与后台代码配合，耗时较长，埋坑较多，出于时间关系，暂缓这个功能，写固定的。
3. 7天免密登录
   + 也就是记住密码，用户第二次登录密码账号自动填充输入框。
   + 封装cookie的增删改操作。
4. 头像上传
   + 这块知识点遇坑较多。首先利用input的type=file属性将图片文件上传，将图片转为base64格式存入数据库，利用canvas将图片画在页面上。
   + 数据库使用blod字段存储base64数据。再从数据库中取出json数据时（包含base64）时，base64格式的数据在解析json的过程中，数据内容中的”+“号会解析成空字符串” “ ，导致图片显示不出来。
   + 图像转变为字符存储这块让我见识到了图片的编码是真的复杂。
5. 密保验证
   + 用户在注册时，填写问题存入数据库。
   + 找回密码时，提取问题比对。密保出于用户体验默认设置了两个问题，当然用户可以自定义修改input里的内容。
   + 当然，有时间的话用select下拉可选框更好。
6. 后台数据的增删改查
   + 利用layui库进行后台布局的设计，具体使用到layui静态table组件、layer弹出层、layadmin简易模板。通过ajax和php实现数据库的读写。
   + layer弹出层可独立使用。table组件响应式比较适合展示数据。
7. 后台分页
   + layui的分页模块坑比较多。根据不同条数展示不同页数这块，需要不断的请求 数据，通过mqysql与php进行数据分页再回显。
   + 由于分页模块的界面经常不能根据后端的实时数据进行渲染，我陷入一阵迷茫，难道分页模块自己写样式？但是我又舍不得这个库的分页模块，分页功能很全，就是api看似缺失了。此时，发现 layui 有一个数据表格的模块，里面的api更全（含分页），功能更多。摸索了一阵发现很难用，鉴于我只需要一个分页的功能，于是又回去研究单独的分页模块，有没有别的办法可以及时监听数据的变化，从而即时更新显示分页界面。后来解决了，其实并不是api缺失，是作者考虑的比较精简。
   + 从中收获了读文档的能力，于是乎继续研究后台管理系统，发现vue的element插件有专门的模板配置，发现layui也是基于别人的技术之上演变而来的，感慨前端博大精深，以后要培养读文档的能力，更要培养耐心。
