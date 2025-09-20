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
    avatar:'res/img/bgd_img',
    name: '占位符',
    desc: '没东西不知道会发生什么<br>可随意删除',
    }
];
const players = [
    {
    avatar:'res/img/bgd_img',
    name: '占位符',
    desc: '没东西不知道会发生什么<br>可随意删除',
    }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>魔法服成员</template>
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