const data = {
  info: [
    {
      className: 'about',
      icon: 'icon-mycenter',
      title: '个人信息',
      content: [
        {'求职意向':'求职意向：前端工程师'},
        {'教育经历':'教育经历：南京邮电大学/测绘工程/2018'},
        {'': '社团经历：2015 - 校科协网络部副部长'}

      ]
    },
    {
      className: 'skill',
      icon: 'icon-liebiao',
      title: '技能列表',
      content: [
        {'前端': '<h3>前端</h3>'},
        {'HTML/CSS': '□ 能编写语义化的HTML，模块化的CSS。熟悉HTLM5新增API及其特性。能够使用CSS实现常用布局和动画，不借助框架实现响应式页面'},
        {'Javascript': '□ 能够在项目中熟练使用ES6，有面对对象开发习惯，熟悉JS异步编程，掌握常用异步解决方案'},
        {'前端框架': '□ 有React/Vue开发经验，对React Native/Weex/PWA保持关注，熟悉jQuery/Bootstrap等常见框架类库的使用'},
        {'前端工具': '□ 使用Gulp/Webpack等构建工具'},
        {'后端': '<h3>后端</h3>'},
        {'后端框架':'□ 使用ThinkPHP/Express/Koa2进行前端Mock请求和响应以及简单数据库操作，配合MySQL/MongoDB开发简单CRUD应用'},
        {'其他知识': '□ 熟悉HTTP常见知识，对HTTP/WebSocket有所了解。了解Apache/Nginx基本配置，实现反向代理等功能'},
        {'其他': '<h3>其他</h3>'},
        {'': '□ 了解排序/字符串查询等常见算法原理，了解基本数据结构'},
        {'C#': '□ 有WPF开发经验，熟悉C#基本语法，对泛型、多态等有所了解'},
        {'多媒体': '□ 能够利用After Effects制作MG动画设计想要的交互效果，熟悉C4D建模'}
      ]
    }    
  ],

  exp: [
    {
      title: '南邮青志联活动平台',
      time: '2015-07',
      content: `<h4>前端/后端</h4>
      使用ThinkCMF管理系统，使用jQuery+Bootstrap进行前端开发，ThinkPHP3编写部分后端业务逻辑
      `,
      url: 'http://volunteer.osyox.com'
    },
    {
      title: '南邮校友会',
      time: '2016-05',
      content: `<h4>前端开发</h4>
      使用WeUI进行快速客户端前端开发，Bootstrap+jQuery开发后台单页应用，使用docker部署至服务器(由于项目已经下线，传至个人服务器提供在线浏览。
      `,
      url: 'http://schoolmate.osyox.com/'
    },
    {
      title: 'Dollars聊天室',
      time: '2017-01',
      url: 'http://drrr.osyox.com/',
      content: `<h4>前端/后端</h4>
      使用React进行前端开发，使用Socket.io框架进行前后端websocket通信，Express作为http服务器，Redis做消息缓存
      `
    },
    {
      title: 'Bilibili Chrome扩展程序',
      time: '2017-06',
      url: 'https://github.com/mioco/chrome-extension-for-bilibili',
      content: `对视频默认宽屏、弹幕开关、自动播放进行偏好设置，接收视频发布动态推送`
    }
  ]
}

export default data;