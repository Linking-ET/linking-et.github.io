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
import imsize from 'markdown-it-imsize'

const GA_MEASUREMENT_ID = 'G-4BY6G2RM8N';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LinKing-ET",
  cleanUrls: true,
  lastUpdated:true,
  markdown: {
    config: (md) => {
      md.use(imsize)
    }
  },
  head: [
      ['link', { rel: 'icon', href: '/res/svg/bread.svg' }],
      ['script', { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}` }],
      ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `]
  ],
  locales:{
    root:{
      label:"简体中文",
      lang:'zh-Hans',
      themeConfig: {
        lastUpdated:false,
        nav,
        sidebar,
        ...CustomTexts
      },
    },
    en:{
      label:"English",
      lang:'en-US',
      themeConfig: {
        lastUpdated:false,
        nav:ENNav,
        sidebar:ENSidebar,
        ...ENCustomTexts
      },
    },
  },
  themeConfig: {
    lastUpdated:false,
    i18nRouting: true,
    logo: '/res/img/logo.png',
    siteTitle: false,
  },
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr: {
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
      ],
    },
    plugins: [
      GitChangelog({
        repoURL: () => 'https://github.com/linking-et/linking-et.github.io',
        mapAuthors: [
          {
            name: 'Lorien Yang',
            username: 'LorienYang',
            mapByEmailAliases: ['postmaster@sakuraonline.cn']
          },
          {
            name:'Kimimaybe29',
            username:'Kimimaybe29',
            mapByEmailAliases:['3050473456@qq.com']
          },
          {
            name:'XChen446',
            username:'XChen446',
            mapByEmailAliases:['3088576338@qq.com']
          },
        ],
      }),
      GitChangelogMarkdownSection({
      }),
    ],
  },
  sitemap: {
    hostname: 'https://www.link-et.link',
    transformItems(items:any[]) {
      return items
          .filter(item => !item.url.includes('migration'))
          .map(item => ({
            url: item.url,
            lastmod: item.lastUpdated || new Date().toISOString(),
          }))
    }
  },
})
