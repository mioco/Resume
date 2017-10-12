const data = {
  info: [
    {
      className: 'about',
      icon: 'icon-mycenter',
      title: '个人信息',
      content: [
        {'求职意向':'Web前端工程师'},
        {'教育经历':'南京邮电大学/测绘工程/2018'},
        {'社团经历': '2015 - 校科协网络部副部长'}

      ]
    },
    {
      className: 'skill',
      icon: 'icon-liebiao',
      title: '技能列表',
      content: [
        {'Vue/Vuex/Vue-router/Element': 'eleme实习期间主要任务是基于vue套餐开发群分平台应用'},
        {'React/Express/Socket.io/Webpack': '下方有相关项目描述'},
        {'Python': '主要用来做题'},
        {'C#': '主要用来做WPF应用'},
        {'Three.js': '<a href="https://www.osyox.com">个站主页</a>'},
        {'ThinkPHP/JQuery/Bootstrap/Docker': ''},
        {'ES2015+/chrome extension API': '<a href="https://github.com/mioco/chrome-extension-for-bilibili/blob/master/src/javascript/bilibiliPlugin.js">bilibili 的 chrome 扩展</a>'},
      ]
    }    
  ],

  exp: [
    {
      title: '南邮青志联活动平台',
      time: '2015-07',
      content: `<h4>前端/后端</h4>
      使用ThinkCMF管理系统，使用jQuery+Bootstrap进行前端开发，ThinkPHP3编写部分后端业务逻辑。（由于项目已下线故用docker部署至个人服务提供预览
      `,
      url: 'http://volunteer.osyox.com'
    },
    {
      title: 'Dollars聊天室',
      time: '2017-01',
      url: 'https://drrr.osyox.com/',
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
  ],

  work: [
    {
      title: '饿了么',
      time: '2017-07 ~ 至今',
      content: `<h4>用户交易研发部 / 移动平台组 / Web前端实习生</h4>
      我们负责移动端Web的eleme应用开发，我参与其中的h5应用组件开发及负责用户群分平台的搭建。
      `
    },
  ]
}

export default data;