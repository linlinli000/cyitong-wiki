import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "成医通",
  description: "校园百科平台",
  lang: 'zh-CN',

  // Sitemap（部署后替换为实际域名）
  sitemap: {
    hostname: 'https://wiki.cyitong.top'
  },

  // Favicon（浏览器标签页图标）
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 导航栏左上角 logo
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'Runtime API 示例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/linlinli000/cyitong-wiki' }
    ],

    // 大纲（右侧目录）
    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    // 上一页 / 下一页
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 深色模式切换
    darkModeSwitchLabel: '主题切换',
    darkModeSwitchTitle: '切换日间 / 夜间模式',

    // 移动端侧边栏菜单
    sidebarMenuLabel: '菜单',

    // 回到顶部
    returnToTopLabel: '回到顶部',

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
    },

    // 404 页面
    notFound: {
      title: '页面未找到',
      quote: '你来到了没有知识的荒原……换个地方看看吧。',
      linkText: '返回首页',
    },

    // 本地搜索（中文）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置',
            backButtonTitle: '返回',
            noResultsText: '未找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
  }
})
