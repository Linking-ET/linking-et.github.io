---
layout: page
gitChangelog: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme';

const coreMembers_owners = [
    {
    avatar:'/res/avatar/1749393192-Kimimustbe29.webp',
    name: 'Kimimaybe29',
    title: "Owner of Kimi's wonderland",
    desc: 'Biggest sponsor of the group<br>Master of Spaghetti Code<br>Go check out my personal website<br>↓',
    links: [
        {icon: 'github', link: 'https://github.com/Kimimaybe29' },
        {icon: 'twitter', link: 'https://x.com/Kimimaybe29'},
        {icon: 'wordpress', link: 'https://kimimaybe29.top'},
        {icon: 'bilibili', link: 'https://space.bilibili.com/504333259' },
        {icon: 'discord', link: 'https://discordapp.com/users/1353211380085428289'},
    ]
    },
    {
    avatar:'https://avatars.githubusercontent.com/u/80152431',
    name: 'Lorien Yang',
    title: 'Website Technology',
    desc: 'WebMaster of Skin Station<br>WebMaster of Forum Station<br>Most skilled in front-end',
    links: [
        {icon: 'github', link: 'https://github.com/lorienyang' },
        {icon: 'vitepress', link: 'https://www.sakuraonline.cn' },
        {icon: 'bilibili', link: 'https://space.bilibili.com/473089208' },
    ]
    },
    {
    avatar:'https://avatars.githubusercontent.com/u/189126940',
    name: 'XCHEN446',
    title: 'Main Maintainer',
    desc: 'Main technician for the group<br>Long experience in running servers<br>Excels at coordination and problem-solving',
    links: [
        {icon: 'bilibili', link: 'https://space.bilibili.com/621908460' },
        {icon: 'github', link: 'https://github.com/XChen446'},
        {icon: 'discord', link: 'https://discordapp.com/users/1339518058259152951'},
      
    ]
    },
    {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=693361027&s=640',
    name: 'FreshWater',
    title: "Owner of FreshWater's Region",
    desc: 'Might be a small cookie?<br>（ps:EchoFisher）',
    links:[
        {icon: 'bilibili', link: 'https://space.bilibili.com/1854567057' },
        {icon: 'github', link: 'https://github.com/Freshwater111'}
    ]
    },
    {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1643115033&s=640',
    name: '柠言千枫',
    title: 'Sponsor of Leaf Page',
    desc: 'Disconnected Monarchy<br>（ps:XCHEN446）',
    links:[
        {icon: 'bilibili',link: 'https://space.bilibili.com/473233505'}
    ]
    },
    {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1634765962&s=640',
    name: 'WaterCarrot_CafeChannel',
    title: 'Owner of WaterCarrot',
    desc: 'Huh?',
    links:[]
    }
];
const coreMembers_ops = [
    {
    avatar:'https://q1.qlogo.cn/g?b=qq&nk=3556314884&s=640',
    name: 'ElfPlayer887454',
    title: 'Admin of WaterCarrot',
    desc: 'Is a harmless admin cat (?)',
    links: [
        {icon: 'bilibili', link: 'https://space.bilibili.com/33391584' }
    ]
    },
    {
    avatar:'https://q1.qlogo.cn/g?b=qq&nk=1437727100&s=640',
    name: 'EchoFisher',
    title: "Admin of FreshWater's Region",
    desc: 'Little Catgirl, give me some porns (×)',
    links: [
        {icon: 'bilibili', link: 'https://space.bilibili.com/443837932' }
    ]
    },
    {
    avatar:'https://q1.qlogo.cn/g?b=qq&nk=2907331904&s=640',
    name: '@M.T',
    title: 'TOC Mascot (?)',
    desc: 'Woo↑?',
    links: [
        {icon: 'bilibili', link: 'https://space.bilibili.com/1473710310'}
    ]
    }
];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Core Member List</template>
    <template #lead> </template>
  </VPTeamPageTitle>
<VPTeamPageSection>
    <template #title>Server Owner List</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers_owners"></VPTeamMembers>
    </template>
</VPTeamPageSection>
<VPTeamPageSection>
    <template #title>Admin List</template>
    <template #members>
      <VPTeamMembers size="small" :members="coreMembers_ops"></VPTeamMembers>
    </template>
</VPTeamPageSection>
</VPTeamPage>