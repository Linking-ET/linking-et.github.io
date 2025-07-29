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
    avatar:'/res/avatar/1749393192-Kimimustbe29.png',
    name: 'Kimimaybe29',
    title: 'Kimi的万事屋服主',
    desc: '群组服最大金主<br>神级屎山代码之手<br>欢迎来我的个人网站看看<br>↓',
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
    title: '网站技术',
    desc: '皮肤站站长<br>论坛站长<br>前端最为出色',
    links: [
        {icon: 'github', link: 'https://github.com/lorienyang' },
        {icon: 'vitepress', link: 'https://www.sakuraonline.cn' },
        {icon: 'bilibili', link: 'https://space.bilibili.com/473089208' },
    ]
    },
    {
    avatar:'https://avatars.githubusercontent.com/u/189126940',
    name: 'XC小陈',
    title: '技术主管',
    desc: '群组主技术<br>开服经验较长<br>协调与解决问题较为出色',
    links: [
        {icon: 'bilibili', link: 'https://i.bilibili.com/621908460' },
        {icon: 'github', link: 'https://github.com/XChen446'},
        {icon: 'discord', link: 'https://discordapp.com/users/1339518058259152951'},
      
    ]
    },
    {
    avatar: '/res/avatar/water.png',
    name: '淡水',
    title: '淡水之域服主',
    desc: '可能是杂鱼？<br>（ps:EchoFisher）',
    links:[
        {icon: 'bilibili', link: 'https://space.bilibili.com/1854567057' },
        {icon: 'github', link: 'https://github.com/Freshwater111'}
    ]
    },
    {
    avatar: '/res/avatar/NYQF.jpg',
    name: '柠言千枫',
    title: '叶服金主',
    desc: '君主离线制<br>（ps:XC-小陈）',
    links:[
        {icon: 'bilibili',link: 'https://space.bilibili.com/473233505'}
    ]
    },
    {
    avatar: '/res/avatar/yoyo.jpg',
    name: 'gezhe',
    title: '呦呦的后花园服主',
    desc: '欸？',
    links:[
        {icon: 'twitter',link: 'https://x.com/andy7770359559'}
    ]
    }
];
const coreMembers_ops = [
    {
    avatar:'/res/avatar/1749393194-N0HAb1tor.png',
    name: 'N0HAb1tor',
    title: '万事屋的管理员',
    desc: '来个闪电苦力怕拳',
    links: [
        {icon: 'bilibili', link: 'https://space.bilibili.com/33391584' }
    ]
    },
    {
    avatar:'/res/avatar/EchoFisher.jpg',
    name: 'EchoFisher',
    title: '淡水之域管理员',
    desc: '小猫梁来点腿子（×）',
    links: [
        {icon: 'bilibili', link: 'https://space.bilibili.com/443837932' }
    ]
    },
    {
    avatar:'/res/avatar/M.T.jpg',
    name: '@M.T',
    title: 'TOC吉祥物（？）',
    desc: '芜↑？',
    links: [
        {icon: 'bilibili', link: 'https://space.bilibili.com/1473710310'}
    ]
    }
];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>核心成员名单</template>
    <template #lead>玩家请到服务器成员登记</template>
  </VPTeamPageTitle>
<VPTeamPageSection>
    <template #title>服主名单</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers_owners"></VPTeamMembers>
    </template>
</VPTeamPageSection>
<VPTeamPageSection>
    <template #title>管理名单</template>
    <template #members>
      <VPTeamMembers size="small" :members="coreMembers_ops"></VPTeamMembers>
    </template>
</VPTeamPageSection>
</VPTeamPage>
