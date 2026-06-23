<script setup lang="ts">
// MajorList — 本科专业列表（数据驱动）
import majors from '@/data/majors.json'

interface Major {
  id: string
  name: string
  college: string
  degree: string
  duration: string
  description: string
}
</script>

<template>
  <div class="major-list">
    <div v-for="m in (majors as Major[])" :key="m.id" class="major-card">
      <div class="card-header">
        <h3 class="card-name">{{ m.name }}</h3>
        <span class="card-duration">{{ m.duration }}</span>
      </div>
      <p class="card-desc">{{ m.description }}</p>
      <div class="card-meta">
        <span class="meta-college">🏛 {{ m.college }}</span>
        <span class="meta-degree">🎓 {{ m.degree }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.major-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
  gap: 1.25em;
  margin: 1.5em 0;
}

.major-card {
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.75em;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.major-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px var(--vp-c-shadow, rgb(0 0 0 / 6%));
}

.card-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

.card-name {
  margin: 0;
  font-size: 1.05em;
  color: var(--vp-c-text-1);
}

.card-duration {
  display: inline-block;
  padding: 0.1em 0.5em;
  border-radius: 0.3em;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 0.75em;
  font-weight: 600;
  white-space: nowrap;
}

.card-desc {
  flex: 1;
  margin: 0.5em 0 0.75em;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75em;
  font-size: 0.82em;
  color: var(--vp-c-text-3);
  padding-top: 0.75em;
  border-top: 1px solid var(--vp-c-divider);
}

.meta-college,
.meta-degree {
  display: flex;
  align-items: center;
  gap: 0.2em;
}
</style>
