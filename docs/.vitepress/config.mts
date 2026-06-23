import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  lang: 'zh-CN',
  title: '成医通',
  description: '成都医学院校园百科平台',
  lastUpdated: true,
  cleanUrls: true,

  // Sitemap（部署后替换为实际域名）
  sitemap: {
    hostname: 'https://wiki.cyitong.top',
  },

  // Favicon
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: nav(),

    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/linlinli000/cyitong-wiki' },
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

    // 深色模式
    darkModeSwitchLabel: '主题切换',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 移动端侧边栏
    sidebarMenuLabel: '菜单',

    // 回到顶部
    returnToTopLabel: '回到顶部',

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/linlinli000/cyitong-wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    // 外部链接图标
    externalLinkIcon: true,

    // 404 页面（由自定义 NotFound 组件覆盖）
    notFound: {
      title: '页面未找到',
      quote: '你来到了没有知识的荒原……换个地方看看吧。',
      linkText: '返回首页',
    },

    // 页脚改由 docs/.vitepress/components/Footer.vue 自定义组件提供

    // 本地搜索
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
  },

  // Markdown 配置
  markdown: {
    math: true,  // LaTeX 数学公式支持
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },

  // Vite 配置
  vite: {
    resolve: {
      alias: {
        '@': __dirname,
      },
    },
    server: {
      allowedHosts: true,
    },
  },
})

function nav() {
  return [
    { text: '首页', link: '/' },
    { text: '新生指南', link: '/freshman/' },
    { text: '学习', link: '/study/', activeMatch: '^/study/' },
    { text: '生活', link: '/life/', activeMatch: '^/life/' },
    { text: '校园', link: '/campus/', activeMatch: '^/campus/' },
    {
      text: '关于',
      items: [
        { text: '贡献指南', link: '/contributing' },
        { text: '更新日志', link: '/changelog' },
        { text: '关于我们', link: '/about' },
      ],
    },
  ]
}

function sidebar() {
  return {
    '/': [
      {
        text: '新生指南',
        collapsed: true,
        items: [
          { text: '概览', link: '/freshman/' },
          { text: '入学准备', link: '/freshman/preparation' },
          { text: '报到流程', link: '/freshman/registration' },
          { text: '军训指南', link: '/freshman/military-training' },
        ],
      },
      {
        text: '学习',
        collapsed: true,
        items: [
          { text: '概览', link: '/study/' },
          { text: '课程安排', link: '/study/curriculum' },
          { text: '成绩与绩点', link: '/study/grades' },
          { text: '考试与复习', link: '/study/exams' },
          { text: '临床实习', link: '/study/clinical-practice' },
        ],
      },
      {
        text: '生活服务',
        collapsed: true,
        items: [
          { text: '概览', link: '/life/' },
          { text: '宿舍', link: '/life/dormitory' },
          { text: '食堂', link: '/life/dining' },
          { text: '快递与外卖', link: '/life/delivery' },
          { text: '周边去处', link: '/life/nearby' },
        ],
      },
      {
        text: '校园',
        collapsed: true,
        items: [
          { text: '概览', link: '/campus/' },
          { text: '学校介绍', link: '/campus/introduction' },
          { text: '专业列表', link: '/campus/majors' },
          { text: '附属医院', link: '/campus/hospitals' },
          { text: '学生组织', link: '/campus/organizations' },
          { text: '常用 APP', link: '/campus/apps' },
        ],
      },
      {
        text: '关于',
        items: [
          { text: '贡献指南', link: '/contributing' },
          { text: '更新日志', link: '/changelog' },
          { text: '关于我们', link: '/about' },
        ],
      },
    ],
  }
}
