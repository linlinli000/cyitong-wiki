<script setup lang="ts">
// Disclaimer 组件 — 危险块免责声明
// 可用于文档底部或任意位置，提示内容仅供参考
</script>

<template>
  <div class="danger custom-block disclaimer">
    <p class="custom-block-title">
      <span class="disclaimer-icon">⚠</span> 免责声明
    </p>
    <p>此处内容仅供参考，若有出入请以官方通知为准。如发现信息过时或错误，欢迎
      <a href="/contributing">协助修正</a>。</p>
  </div>
</template>

<style scoped>
.disclaimer {
  margin-top: 2rem;
}

.disclaimer-icon {
  margin-right: 0.25em;
}

.disclaimer a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}
</style>
