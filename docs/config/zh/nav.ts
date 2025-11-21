// config/nav.ts

import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: '主页', link: '/' },
    { text: '友情链接',
        items:[
            { text: 'MSCPO - Minecraft服务器集体宣传组织', link: 'https://www.mscpo.top/' },
            { text: 'SWA Network', link: 'https://www.swamc.top/' },
            { text: 'EggMC服务器', link: 'https://eggmc.top/' },
            { text: 'KlpMC服务器', link: 'https://klpmc.top/' },
        ]
    },
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
            { text: '萝服',link: '/docs/carrot/' },
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
            {text: '在线地图', link:'https://map.link-et.link'},
        ]
    }
];
