<template>
  <footer class="vp-footer">
    <div class="vp-footer-container">
      <p class="vp-footer-copyright">
        Copyright &copy; {{ currentYear }} LinKing-ET.
      </p>
      <p class="vp-footer-poweredby">
        Powered by <a href="https://vitepress.dev/" target="_blank" rel="noopener">VitePress</a>.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
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
.vp-footer-poweredby {
  margin: 0;
  line-height: 1.5;
}

.vp-footer-poweredby a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.vp-footer-poweredby a:hover {
  text-decoration: underline;
}
</style>
