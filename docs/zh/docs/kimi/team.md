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

const ops = [
    {
    avatar:'/res/avatar/1749393192-Kimimustbe29.png',
    name: 'Kimimaybe29',
    title: '服主',
    desc: '常年不上线的杂鱼腐竹<br>欢迎来我的个人网站看看<br>第一个别点错了',
    links: [
        { icon: 'wordpress', link: 'https://kimimaybe29.top'},
        { icon: 'github', link: 'https://github.com/Kimimaybe29' },
        { icon: 'twitter', link: 'https://x.com/Kimimaybe29'},
        { icon: 'bilibili', link: 'https://space.bilibili.com/504333259' },
        ]
    },
    {
    avatar:'/res/avatar/1749393194-N0HAb1tor.png',
    name: 'N0HAb1tor',
    title: '管理员',
    desc: '来个闪电苦力怕拳' ,
    links: [
        { icon: 'bilibili', link: 'https://space.bilibili.com/33391584' }
    ]
    }
];
const players = [
    {
    avatar:'/res/avatar/1749393192-lanxiao1.png',
    name: 'lanxiao1',
    }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Kimi的万事屋成员</template>
    <template #lead>可以自由修改描述</template>
  </VPTeamPageTitle>
<VPTeamPageSection>
    <template #title>管理组</template>
    <template #members>
      <VPTeamMembers size="medium" :members="ops"></VPTeamMembers>
    </template>
</VPTeamPageSection>
<VPTeamPageSection>
    <template #title>玩家们</template>
    <template #members>
      <VPTeamMembers size="small" :members="players"></VPTeamMembers>
    </template>
</VPTeamPageSection>
</VPTeamPage>
