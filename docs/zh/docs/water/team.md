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
    avatar: '/res/avatar/water.png',
    name: '淡水',
    desc: '淡水之域腐竹<br>可能是杂鱼？',
    links:[
        {icon: 'bilibili', link: 'https://space.bilibili.com/1854567057' },
        {icon: 'github', link: 'https://github.com/Freshwater111'}
    ]
    },
];
const players = [
    {
    avatar:'/res/avatar/woaibailuya.jpg',
    name: 'woaibailuya',
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