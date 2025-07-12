import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  sitemap: {
    hostname: 'https://lezi.8aka-org'
  },

  outDir: '../dist',
  base: '/',

  lang: 'zh-CN',
  title: 'Lezi-Wiki',
  description: '不太聪明的驿站 乐子记录之路',
  head,

  ignoreDeadLinks: true,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: [1, 6],
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/8aka-Team/lezi-wiki' }],

    footer: {
      message: 'https://github.com/8aka-Team/lezi-wiki',
      copyright: 'Copyright © 2019-present maomao',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'postyizhan.lezi-wiki',
    },

    comment: {
      repo: '8aka-Team/lezi-wiki',
      repoId: 'R_kgDONvQIMA',
      category: 'Announcements',
      categoryId: 'DIC_kwDONvQIMM4CoEX7',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
