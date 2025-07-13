<template>
  <div v-if="bvValue" class="bilibili-player-container">
    <iframe :src="iframeSrc"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
            width="668"
            height="376">
    </iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from "vitepress";

const route = useRoute()

const bvValue = computed(() => route.data.frontmatter.BV as string | undefined)

const iframeSrc = computed(() => {
  if (bvValue.value) {
    return `//player.bilibili.com/player.html?isOutside=true&bvid=${bvValue.value}&p=1&autoplay=0`;
  }
  return '';
})
</script>

