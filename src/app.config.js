export default {
  pages: [
    'pages/index/index',
    'pages/test/test'
  ],
  tabBar: {
    list: [{
      pagePath: 'pages/index/index',
      text: '个人信息'
    }, {
      pagePath: 'pages/test/test',
      text: '设置'
    }, ] ,
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
