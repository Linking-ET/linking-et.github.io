---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme';

const coreMembers_Kimi = [
    {
    avatar:'https://www.sakura.fun/resource/avatar/1749393192-Kimimustbe29.png',
    name: 'Kimimaybe29',
    desc: '群组服最大金主'，
    links: [
        { icon: 'github', link: 'https://github.com/Kimimaybe29' },
        { icon: 'wordpress', link: 'https://kimimaybe29.top'},
        { icon: 'bilibili', link: 'https://space.bilibili.com/504333259' },
        ]
    },
    {
    avatar:'https://avatars.githubusercontent.com/u/80152431?v=4',
    name: 'Lorien Yang',
    desc: '网站技术',
    links: [
        { icon: 'github', link: 'https://github.com/star-moon-night' },
        { icon: 'vitepress', link: 'https://www.sakuraonline.cn' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/473089208' },
    ]
    },
    {
    avatar:'/res/avatar/xc.jpg',
    name: 'XC小陈',
    links: [
        { icon:'bilibili', link: 'https://i.bilibili.com/621908460' },
        { icon:'github',link: ' https://github.com/XChen446'}
    ]
    },
];
const coreMembers_Water = [
    {
    avatar: '/res/avatar/water.png',
    name: '淡水',
    links:[
        {icon: 'bilibili', link: 'https://space.bilibili.com/1854567057' },
        {icon: 'github', link: 'https://github.com/Freshwater111'}
    ]
    }
];
const coreMembers_Ye = [
    {
    avatar: '/res/avatar/NYQF.jpg',
    name: '柠言千枫',
    links:[
        {icon: 'bilibili',link: 'https://space.bilibili.com/473233505'}
    ]
    }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>总标题1</template>
    <template #lead>总标题2</template>
  </VPTeamPageTitle>
<VPTeamPageSection>
    <template #title>Kimi的万事屋成员列表</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers_Kimi"></VPTeamMembers>
    </template>
</VPTeamPageSection>
<VPTeamPageSection>
    <template #title>淡水之域成员列表</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers_Water"></VPTeamMembers>
    </template>
</VPTeamPageSection>
<VPTeamPageSection>
    <template #title>叶服成员列表</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers_Ye"></VPTeamMembers>
    </template>
</VPTeamPageSection>
</VPTeamPage>
