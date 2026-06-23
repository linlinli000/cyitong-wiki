<script setup lang="ts">
// Author 组件 — 从 frontmatter 读取 author 字段，展示署名信息
// 支持两种格式: GitHub 用户名直接填写，或 -qq-<QQ号> 格式

import { useData } from 'vitepress'
import { computed } from 'vue'

interface AuthorInfo {
  name: string
  avatar: string
  link?: string
  qq?: string
  github?: string
}

const { frontmatter } = useData()

function getAvatar(github?: string, qq?: string): string {
  if (github)
    return `https://avatars-githubusercontent.webp.se/${github}?s=96`
  if (qq)
    return `https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=3`
  return ''
}

function parseAuthor(authorId: string): AuthorInfo {
  // 匹配 -qq-<QQ号> 或 -qq-<QQ号>-<名称> 格式
  const qqMatch = authorId.match(/-qq-(\d+)(?:-(\w+))?/)
  if (qqMatch) {
    const qq = qqMatch[1]
    const qqName = qqMatch[2]
    return {
      name: qqName || `QQ ${qq}`,
      avatar: getAvatar(undefined, qq),
      qq,
    }
  }
  // 默认为 GitHub 用户名
  return {
    name: authorId,
    avatar: getAvatar(authorId),
    link: `https://github.com/${authorId}`,
    github: authorId,
  }
}

const authors = computed<AuthorInfo[]>(() => {
  const raw = frontmatter.value.author
  if (!raw) return []
  const list = Array.isArray(raw) ? raw : [raw]
  return list.map(id => parseAuthor(String(id)))
})
</script>

<template>
  <section v-if="authors.length > 0" class="authors">
    <a
      v-for="author in authors"
      :key="author.name"
      class="author"
      :href="author.link"
      :target="author.link ? '_blank' : undefined"
    >
      <img v-if="author.avatar" class="avatar" :src="author.avatar" alt="">
      <span class="name">{{ author.name }}</span>
    </a>
  </section>
</template>

<style scoped>
.authors {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75em;
  margin: 1em 0;
  font-size: 0.85rem;
}

.author {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  padding: 0.15em 0.5em;
  border: 1px solid var(--vp-c-divider);
  border-radius: 1.8em;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  opacity: 0.85;
  transition: opacity 0.2s, border-color 0.2s;
}

.author[href]:hover {
  opacity: 1;
  border-color: var(--vp-c-brand-1);
}

.avatar {
  width: 1.6em;
  height: 1.6em;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  line-height: 1.5;
  font-weight: 500;
}
</style>
