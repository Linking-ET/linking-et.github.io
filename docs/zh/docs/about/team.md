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

const coreMembers_owners = [
    {
    avatar:'https://www.sakura.fun/resource/avatar/1749393192-Kimimustbe29.png',
    name: 'Kimimaybe29',
    desc: '群组服最大金主<br>Kimi的万事屋腐竹',
    links: [
        { icon: 'github', link: 'https://github.com/Kimimaybe29' },
        { icon: 'wordpress', link: 'https://kimimaybe29.top'},
        { icon: 'bilibili', link: 'https://space.bilibili.com/504333259' },
    ]
    },
    {
    avatar:'https://avatars.githubusercontent.com/u/80152431?v=4',
    name: 'Lorien Yang',
    desc: '网站技术<br>皮肤站站长',
    links: [
        { icon: 'github', link: 'https://github.com/star-moon-night' },
        { icon: 'vitepress', link: 'https://www.sakuraonline.cn' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/473089208' },
    ]
    },
    {
    avatar: '/res/avatar/water.png',
    name: '淡水',
    desc: '淡水之域腐竹',
    links:[
        {icon: 'bilibili', link: 'https://space.bilibili.com/1854567057' },
        {icon: 'github', link: 'https://github.com/Freshwater111'}
    ]
    },
    {
    avatar:'/res/avatar/xc.jpg',
    name: 'XC小陈',
    desc: '叶服腐竹',
    links: [
        { icon:'bilibili', link: 'https://i.bilibili.com/621908460' },
        { icon:'github',link: ' https://github.com/XChen446'}
    ]
    },
    {
    avatar: '/res/avatar/NYQF.jpg',
    name: '柠言千枫',
    desc: '叶服金主',
    links:[
        {icon: 'bilibili',link: 'https://space.bilibili.com/473233505'}
    ]
    },
    {
    avatar: '/res/avatar/yoyo.jpg',
    name: 'gezhe',
    desc: '呦呦',
    links:[
        {icon: 'twitter',link: 'https://x.com/andy7770359559'}
    ]
    }
];
const coreMembers_ops = [
    {
    avatar:'https://www.sakura.fun/resource/avatar/1749393194-N0HAb1tor.png',
    name: 'N0HAb1tor',
    },
];
const coreMembers_players = [
    {
    avatar:'https://www.sakura.fun/resource/avatar/1749393192-lanxiao1.png',
    name: 'lanxiao1',
    },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>所有成员名单</template>
    <template #lead>如果遗漏了你，请发起pr！</template>
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
<VPTeamPageSection>
    <template #title>玩家名单</template>
    <template #members>
      <VPTeamMembers size="small" :members="coreMembers_players"></VPTeamMembers>
    </template>
</VPTeamPageSection>
</VPTeamPage>
