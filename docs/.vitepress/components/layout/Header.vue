<script setup lang="ts">
// Header 组件 — 文档页顶部欢迎横幅
</script>

<template>
  <header class="wiki-header">
    <p class="header-text">
      欢迎加入成医通交流群 <strong>待补充</strong>。项目修缮中，欢迎
      <a href="/contributing">贡献内容</a>。
    </p>
  </header>
</template>

<style scoped>
.wiki-header {
  margin-block: -1em 2em;
  padding: 0.75em 1em;
  border-radius: 0.5em;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  line-height: 1.6;
}

.header-text {
  margin: 0;
}

.wiki-header strong {
  color: var(--vp-c-brand-1);
  font-size: 1.05em;
}

.wiki-header a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .wiki-header {
    font-size: 0.8em;
    padding: 0.6em 0.8em;
  }
}
</style>
