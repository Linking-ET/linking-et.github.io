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
    avatar:'/res/avatar/xc.jpg',
    name: 'XC小陈',
    desc: '>叶服腐竹<br>解决问题最有思路的人',
    links: [
        { icon:'bilibili', link: 'https://i.bilibili.com/621908460' },
        { icon:'github',link: ' https://github.com/XChen446'}
    ]
    },
    {
    avatar: '/res/avatar/NYQF.jpg',
    name: '柠言千枫',
    desc: '叶服金主<br>万年不出现',
    links:[
        {icon: 'bilibili',link: 'https://space.bilibili.com/473233505'}
    ]
    },
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
    <template #title>叶服成员</template>
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