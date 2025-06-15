import { defineConfig } from 'vitepress'
import {nav} from '../config/nav'
import {sidebar} from '../config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "LinKing-ET",
  description: "欢迎加入LET万事屋群组服！",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/linking-et/linking-et.github.io', }
    ],
    footer:{
      message:'本网站以<a href="https://github.com/Linking-ET/linking-et.github.io/blob/main/LICENSE" target="_blank">GNU General Public License v3.0</a>的条款发布。',
      copyright:'Copyright © 2025 LiKing-ET 保留所有权利。',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    notFound: {
      title: '页面未找到',
      quote: '当你迷失方向的时候不妨回头看看。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    editLink: {
      pattern: 'https://github.com/LinKing-ET/linking-et.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})
