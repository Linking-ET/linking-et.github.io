import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: '主页', link: '/en' },
    {text: '了解我们',link: '/en/docs/info/about'},
    {
        text: '服务器列表',
        items: [
            { text: 'Kimi的万事屋', link: '/en/docs/kimi' },
            { text: '淡水之域', link: '/en/docs/water' },
            { text: '叶服',link: '/en/docs/ye' },
            { text: '呦呦的后花园',link: '/en/docs/yoyo' }
        ]
    }
];