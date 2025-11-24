import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: 'main page', link: '/en' },
    {text: 'about us',link: '/en/docs/info/about'},
    {
        text: 'server list',
        items: [
            { text: 'Kimi home', link: '/en/docs/kimi' },
            { text: 'freshwater region', link: '/en/docs/water' },
            { text: 'leaf page',link: '/en/docs/leaf' },
            { text: 'carrot backyard',link: '/en/docs/carrot' }
        ]
    }
];
