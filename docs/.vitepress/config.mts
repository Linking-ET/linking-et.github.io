import { defineConfig } from 'vitepress'
//引入ZH配置文件
import {nav} from '../config/zh/nav'
import {sidebar} from '../config/zh/sidebar'
import {CustomTexts} from '../config/zh/CustomTexts'
//引入EN配置文件
import {nav as ENNav} from '../config/en/nav'
import {sidebar as ENSidebar} from '../config/en/sidebar'
import {CustomTexts as ENCustomTexts} from '../config/en/CustomTexts'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LinKing-ET",
  cleanUrls: true,
  lastUpdated:true,
  locales:{
    root:{
      label:"简体中文",
      lang:'zh-Hans',
      themeConfig: {
        nav,
        sidebar,
        ...CustomTexts
      },
    },
    en:{
      label:"English",
      lang:'en-US',
      themeConfig: {
        nav:ENNav,
        sidebar:ENSidebar,
        ...ENCustomTexts
      },
    },
  },
  themeConfig: {
    i18nRouting: true,
    logo: '/res/img/logo.png',
    siteTitle: false,
  },
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  vite: {
    plugins: [
      GitChangelog({
        // Fill in your repository URL here
        repoURL: () => 'https://github.com/linking-et/linking-et.github.io',
      }),
      GitChangelogMarkdownSection({}),
    ],
  },
})
