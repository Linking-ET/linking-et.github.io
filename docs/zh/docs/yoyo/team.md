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
    avatar: '/res/avatar/yoyo.jpg',
    name: 'gezhe',
    desc: '你是谁？<br>为什么看得见我？<br>警告你啊！  别惹我！  如果你惹了我！<br>那……那...什么也不会发生！<br>恭喜你，你惹到了世界上最好惹的人',
    links:[
        {icon: 'twitter',link: 'https://x.com/andy7770359559'}
    ]
    }
];
const players = [
    {
    avatar:'/re/avatar/M.T.jpg',
    name: '@M.T',
    desc: '服务器提供者<br>不参与实际服务器管理',
    }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>呦呦的后花园成员</template>
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