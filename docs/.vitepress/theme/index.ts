// https://vitepress.dev/zh/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Icon } from '@iconify/vue'
import { h } from 'vue'

import Header from '@/components/layout/Header.vue'
import Author from '@/components/layout/Author.vue'
import Footer from '@/components/layout/Footer.vue'
import Disclaimer from '@/components/layout/Disclaimer.vue'
import NotFound from '@/components/layout/NotFound.vue'
import HospitalList from '@/components/data/HospitalList.vue'
import MajorList from '@/components/data/MajorList.vue'
import OrganizationList from '@/components/data/OrganizationList.vue'

import './style.css'

// 全局组件（可在 Markdown 中直接使用）
const globalComponents = {
  Icon,
  Disclaimer,
  HospitalList,
  MajorList,
  OrganizationList,
}

declare module 'vue' {
  export interface GlobalComponents {
    Icon: typeof Icon
    Disclaimer: typeof Disclaimer
    HospitalList: typeof HospitalList
    MajorList: typeof MajorList
    OrganizationList: typeof OrganizationList
  }
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(Header),
      'doc-footer-before': () => h(Author),
      'doc-after': () => h(Footer),
      'not-found': () => h(NotFound),
    })
  },
  enhanceApp({ app }) {
    // 注册全局组件，可在 Markdown 中直接使用
    Object.entries(globalComponents).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
} satisfies Theme
