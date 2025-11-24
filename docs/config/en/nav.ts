import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: 'Home', link: '/en' },
    { text: 'Friends',
        items:[
            { text: 'MSCPO', link: 'https://www.mscpo.top/' },
            { text: 'SWA Network', link: 'https://www.swamc.top/' },
            { text: 'EggMC', link: 'https://eggmc.top/' },
            { text: 'KlpMC', link: 'https://klpmc.top/' },
            { text: 'TOC', link: 'https://www.mminecraft.cn/' },
        ]
    },
    { text: 'About',
        items: [
            { text: 'Who are we?', link: '/en/docs/about' },
            { text: 'Core members', link: '/en/docs/about/team'}
        ]
    },
    {
        text: 'SubRegions',
        items: [
            { text: "Kimi's Wonderland", link: '/en/docs/kimi' },
            { text: 'Ghast Skylands', link: '/en/docs/kimi/skyland' },
            { text: "Freshwater's Region", link: '/en/docs/water' },
            { text: 'Leaf Page',link: '/en/docs/leaf' },
            { text: 'WaterCarrot',link: '/en/docs/carrot' }
        ]
    },
        {
        text:'Rules',
        items: [
            { text: 'Content Edit Rule', link:'/en/docs/rule/EditRule'},
            { text: 'Appropriate Messaging', link:'/en/docs/rule/MsgRule'},
        ]
    },
    {
        text: 'Services',
        items:[
            {text: 'Link Disk', link:'https://pan.link-et.link'},
            {text: 'Online Maps', link:'https://map.link-et.link'},
        ]
    }
];
