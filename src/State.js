const data = {
  info: [
    {
      className: 'about',
      icon: 'icon-mycenter',
      title: '个人信息',
      content: [
        {'教育经历':'南京邮电大学/测绘工程'},
        {'求职意向':'Web前端实习'}
      ]
    },
    {
      className: 'skill',
      icon: 'icon-liebiao',
      title: '技能列表',
      content: [
        {'HTML/CSS': '对HTML5语义化及部分API有所了解，能够使用CSS3制作简单动画'},
        {'Javascript': '熟练使用ES5,对ES2015+有所了解，学习并尝试在项目中使用；熟练使用DOM/BOM API；熟练使用jQuery；'},
        {'Web框架':'可以使用ThinkPHP/Express/Vue进行前端Mock请求和响应以及简单数据库操作'},
        {'前端框架': '熟练使用Bootstrap，React/Vue两类MV*框架'},
        {'前端工具': 'Gulp/Webpack/Sass/Less'},
        {'版本库工具': 'Git'},
        {'多媒体工具': '能够利用AfterEffects制作MG动画设计想要的交互效果'}
      ]
    }    
  ],

  exp: [
    {
      title: '南邮青志联活动平台',
      time: '2015-07',
      content: '这是我学习了jQuery和thinkphp3后接的外包，使用ThinkCMF，主要工作有：<br/>'+
               '前端模板:'+
               '主要有6个页面，主页，招募列表，招募详情，新闻/公告，个人中心，社团（发布招募信息的1级用户）信息中心<br/>'+
               '后端业务逻辑：'+
               '除ThinkCMF自带的文章/用户发布管理功能，项目需要有活动报名，发布/报名审核，用户参与活动的记录及其打印等...<br/>'+
               '成长：'+
               '这算是我14年底接触前端开始的第一个项目，前端部分是进一步熟悉了jquery的使用，用到了更多的API，基于ajax做了一个（高度耦合的）选择组件。后端部分进一步熟悉了thinkphp，熟练进行mysql的增删查改操作...对服务器有了一定的认识，学到了linux安装环境修改服务器虚拟目录等，对项目的整个流程有了最初的认识',
      url: 'http://volunteer.osyox.com'
    },
    {
      title: '南邮校友会',
      time: '2016-05',
      content: '这个是个合作开发项目，前端需求是前台使用WeUI，针对移动端开发。有朋友圈、通讯录、个人信息、注册登录五个页面；后台界面随意。我负责应用的前后台的前端界面搭建，后台界面我尝试了单页面应用，写了一个基于JQ的（紧耦合）的Hash路由解决前进后退刷新问题。<br/>'+
               '成长：<br/>'+
               '组件化意识增强，很多东西得到了复用，代码看起来舒服了很多。了解到HTML5 History API，多人合作开发进一步熟悉了git的使用'
    },
    {
      title: 'Dollars聊天室',
      time: '2017-01',
      url: 'http://drrr.osyox.com/',
      content: '这是一个用于实践react+express+socketio的独立开发项目，目标在于实现多房间公聊和私聊，因为目的在于实现功能，所以静态文件和样式上基本摘自http://drrr.com。边学习边开发的过程中逐渐了解了react事件机制和页面加载缓慢的处理方法，实现了div拖拽移动这样的小功能，整个开发过程比较愉快。'
    }
  ]
}

export default data;