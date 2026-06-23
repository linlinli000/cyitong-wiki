<script setup lang="ts">
// Footer 组件 — 页面底部自定义页脚
// 替代 themeConfig.footer 的内置页脚
</script>

<template>
  <footer class="wiki-footer">
    <p class="footer-message">
      内容由本校学生编写。世界千变万化，过往经验不保证完全可用，请以实际情况为准。
    </p>
    <p class="footer-copyright">
      © {{ new Date().getFullYear() }}
      <a href="https://github.com/linlinli000/cyitong-wiki" target="_blank">成医通项目组</a>
      ，采用
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank">CC BY-NC-SA 4.0</a>
      协议。公益项目，与成都医学院校方无关。
    </p>
  </footer>
</template>

<style scoped>
.wiki-footer {
  padding-top: 2rem;
  font-size: 0.85rem;
  text-align: center;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 2rem;
}

.footer-message {
  margin: 0 0 0.5em;
}

.footer-copyright {
  margin: 0;
}

.wiki-footer a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: none;
}

.wiki-footer a:hover {
  text-decoration: underline;
}
</style>
