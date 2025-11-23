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
    avatar: '/res/avatar/example.jpg',
    name: 'example',
    title: '管理',
    desc: '这是备注这是备注这是备注',
    links:[
        {}
    ]
    }
];
const players = [
    {
    avatar:'/res/avatar/example.jpg',
    name: '玩家',
    desc: '这是备注这是备注这是备注',
    }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>这是标题</template>
    <template #lead>这是头行</template>
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
