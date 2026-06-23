<script setup lang="ts">
// NotFound 组件 — 自定义 404 页面
</script>

<template>
  <div class="not-found">
    <img
      class="not-found-logo"
      src="/logo.svg"
      alt="成医通 Logo"
    >
    <h1 class="not-found-title">页面未找到</h1>
    <p class="not-found-desc">你来到了没有知识的荒原……换个地方看看吧。</p>
    <a class="not-found-button" href="/">返回首页</a>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60dvh;
  text-align: center;
  padding: 2rem;
}

.not-found-logo {
  width: 8em;
  opacity: 0.3;
  margin-bottom: 1.5rem;
}

.not-found-title {
  font-size: 2em;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5em;
}

.not-found-desc {
  color: var(--vp-c-text-2);
  margin: 0 0 2em;
}

.not-found-button {
  display: inline-block;
  padding: 0.4em 1.5em;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 1.2em;
  color: var(--vp-c-brand-1);
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.25s, color 0.25s, background-color 0.25s;
}

.not-found-button:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
  background-color: var(--vp-c-bg-soft);
}
</style>
