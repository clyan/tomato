module.exports = {
  name: 'tomato',
  build: {
    css: {
      preprocessor: 'less',
      configureVite(config) {
        // 添加一个自定义插件
        config.plugins.push(vitePluginXXX);
        return config;
      },
    },
    site: {
      publicPath: '/tomato/',
    },
    
  },
  site: {
    title: 'tomato',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
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
        ],
      },
    ],
  },
};
