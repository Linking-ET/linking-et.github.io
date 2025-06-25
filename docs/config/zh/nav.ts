// config/nav.ts

import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: '主页', link: '/' },
    {text: '了解我们',link: '/docs/about/'},
    {
        text: '服务器列表',
        items: [
            { text: 'Kimi的万事屋', link: '/docs/kimi/' },
            { text: '淡水之域', link: '/docs/water/' },
            { text: '叶服',link: '/docs/ye/' },
            { text: '呦呦的后花园',link: '/docs/yoyo/' }
        ]
    }
];