module.exports = {
  name: 'tomato',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/tomato/',
    },
  },
  site: {
    title: 'tomato',
    versions: [],
    htmlPluginOptions: {
      meta: {
        'docsearch:version': 'v2',
      },
    },
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    defaultLang: 'zh-CN',
    locales: {
      'zh-CN': {
        title: 'Tomato 2',
        description: '轻量、可靠的移动端组件库',
        logo: 'https://img01.yzcdn.cn/vant/logo.png',
        langLabel: '中文',
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
            ],
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'Button 按钮',
              },
              {
                path: 'overlay',
                title: 'Overlay 遮罩层',
              },
              {
                path: 'turntable',
                title: 'Turntable 转盘',
              },
            ],
          },
        ],
      },
    },
  },
};
