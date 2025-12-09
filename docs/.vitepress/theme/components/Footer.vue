<template>
  <footer class="vp-footer" v-if="isHomePage">
    <div class="vp-footer-container">
      <p class="vp-footer-copyright">
        Copyright &copy; {{ currentYear }} LinKing-ET.
      </p>
      <p class="vp-footer-copyright">
          "Minecraft"以及"我的世界"为美国微软公司的商标 本站与微软公司没有从属关系
      </p>
      <p class="vp-footer-powered-by">
        Powered by <a href="https://vitepress.dev/" target="_blank" rel="noopener">VitePress</a>.
      </p>
        <TrustLogo/>
    </div>
  </footer>
    <footer class="vp-footer" v-if="isEnHomePage">
        <div class="vp-footer-container">
            <p class="vp-footer-copyright">
                Copyright &copy; {{ currentYear }} LinKing-ET.
            </p>
            <p class="vp-footer-copyright">
                "Minecraft" is the trademark of Microsoft Corporation of the United States. This website has no affiliation with Microsoft Corporation.
            </p>
            <p class="vp-footer-powered-by">
                Powered by <a href="https://vitepress.dev/" target="_blank" rel="noopener">VitePress</a>.
            </p>
            <TrustLogo/>
        </div>
    </footer>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useRoute} from "vitepress";
import TrustLogo from "./TrustLogo.vue";

const currentYear = ref(new Date().getFullYear());

const route = useRoute()
const isHomePage = computed(() => route.path === '/');
const isEnHomePage = computed(() => route.path === '/en/');
</script>

<style scoped>
.vp-footer {
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
  padding: 16px 24px;
  margin-top: 64px;
  text-align: center;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.vp-footer-container {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.vp-footer-copyright,
.vp-footer-powered-by {
  margin: 0;
  line-height: 1.5;
}

.vp-footer-powered-by a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.vp-footer-powered-by a:hover {
  text-decoration: underline;
}

.trust-badge {
    margin-top: 8px;
}
</style>
