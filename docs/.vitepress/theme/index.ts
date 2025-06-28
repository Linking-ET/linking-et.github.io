// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from "./components/Layout.vue";

//引入评论系统
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

//引入版权声明
import CopyRight from "./components/CopyRight.vue";

export default {
  extends: DefaultTheme,
  //引入评论系统
  setup(){
    const { frontmatter } = useData();
    const route = useRoute();

    giscusTalk({
      repo:"linking-et/linking-et.github.io",
      repoId:"R_kgDOO7bbqQ",
      category:"General",
      categoryId:'DIC_kwDOO7bbqc4Cr9F1',
      mapping:'pathname',
      inputPosition:'bottom',
      lang:'zh-CN',
      },
        {
          frontmatter, route
        },
        true
    )
  },
  Layout: () => {
    return h(Layout)
  },
  enhanceApp({ app, router, siteData }) {
    app.component('CopyRight', CopyRight)
  },
} satisfies Theme
