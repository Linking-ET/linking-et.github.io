// config/nav.ts

import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: '主页', link: '/' },
    { text: '了解我们',
        items: [
            { text: '我们是谁？', link: '/docs/about' },
            { text: '核心成员列表', link: '/docs/about/team'}
        ]
    },
    {
        text: '服务器列表',
        items: [
            { text: 'Kimi的万事屋', link: '/docs/kimi/' },
            { text: '乐魂空岛', link: '/docs/kimi/skyland' },
            { text: '淡水之域', link: '/docs/water/' },
            { text: '叶服',link: '/docs/leaf/' },
            { text: '蘿蔔服',link: '/docs/carrot/' },
            { text: '魔法服',link: '/docs/magic/' }
        ]
    },
    {
        text:'准则',
        items: [
            { text: '内容编写准则', link:'/docs/rule/EditRule'},
            { text: '安全发言准则', link: '/docs/rule/MsgRule'},
        ]
    },
    {
        text: '其他服务',
        items:[
            {text: '网盘', link:'https://pan.link-et.link'},
            //{text: '服务器地图', link:'https://map.link-et.link'},
        ]
    }
];
