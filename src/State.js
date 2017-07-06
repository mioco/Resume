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
        {'HTML/CSS': '□ 能编写语义化的<light>HTML</light>，模块化的<light>CSS</light>。熟悉HTLM5新增API及其特性。能够使用CSS实现常用布局和动画，不借助框架实现<light>响应式页面</light>'},
        {'Javascript': '□ <light>能够在项目中熟练使用ES6</light>，有<light>面对对象</light>开发习惯，熟悉JS异步编程，<light>掌握常用异步解决方案<light>'},
        {'前端框架': '□ 有<light>React/Vue</light>开发经验，对<light>React Native/Weex/PWA</light>保持关注，熟悉jQuery/Bootstrap等常见框架类库的使用'},
        {'前端工具': '□ 使用<light>Gulp/Webpack</light>等构建工具'},
        {'后端': '<h3>后端</h3>'},
        {'后端框架':'□ 使用<light>ThinkPHP/Express/Koa2</light>进行前端Mock请求和响应以及简单数据库操作，配合<light>MySQL/MongoDB</light>开发简单CRUD应用'},
        {'其他知识': '□ 熟悉<light>HTTP常见知识</light>，对HTTP/WebSocket有所了解。了解<light>Apache/Nginx</light>基本配置，实现反向代理等功能'},
        {'其他': '<h3>其他</h3>'},
        {'': '□ 了解排序/字符串查询等常见算法原理，了解基本数据结构'},
        {'C#': '□ 有<light>WPF</light>开发经验，熟悉<light>C#</light>基本语法，对泛型、多态等有所了解'},
        {'多媒体': '□ 能够利用<light>After Effects制作MG动画</light>设计想要的交互效果，熟悉<light>C4D建模</light>'}
      ]
    }    
  ],

  exp: [
    {
      title: '南邮青志联活动平台',
      time: '2015-07',
      content: `<h4>前端/后端</h4>
      使用<light>ThinkCMF管理系统</light>，使用<light>jQuery+Bootstrap</light>进行前端开发，<light>ThinkPHP3</light>编写部分后端业务逻辑
      `,
      url: 'http://volunteer.osyox.com'
    },
    {
      title: '南邮校友会',
      time: '2016-05',
      content: `<h4>前端开发</h4>
      使用<light>WeUI</light>进行快速客户端前端开发，<light>Bootstrap+jQuery</light>开发后台单页应用，使用docker部署至服务器(由于项目已经下线，传至个人服务器提供在线浏览。
      `,
      url: 'http://schoolmate.osyox.com/'
    },
    {
      title: 'Dollars聊天室',
      time: '2017-01',
      url: 'http://drrr.osyox.com/',
      content: `<h4>前端/后端</h4>
      使用<light>React</light>进行前端开发，使用<light>Socket.io</light>框架进行前后端websocket通信，<light>Express</light>作为http服务器，<light>Redis</light>做消息缓存
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