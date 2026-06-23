<script setup lang="ts">
// HospitalList — 附属医院列表（数据驱动）
import hospitals from '@/data/hospitals.json'

interface Hospital {
  id: string
  name: string
  level: string
  type: string
  address: string
  website: string
  phone: string
  description: string
  specialties: string[]
}
</script>

<template>
  <div class="hospital-list">
    <div v-for="h in (hospitals as Hospital[])" :key="h.id" class="hospital-card">
      <div class="card-header">
        <h3 class="card-name">{{ h.name }}</h3>
        <span class="card-badge" :class="h.level.includes('三甲') ? 'badge-grade-a' : 'badge-grade-b'">
          {{ h.level }}
        </span>
      </div>
      <p class="card-desc">{{ h.description }}</p>
      <div class="card-meta">
        <div class="meta-item">
          <span class="meta-icon">📍</span>
          <span>{{ h.address }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">📞</span>
          <span>{{ h.phone }}</span>
        </div>
        <div v-if="h.website" class="meta-item">
          <span class="meta-icon">🌐</span>
          <a :href="h.website" target="_blank">官方网站</a>
        </div>
      </div>
      <div class="card-tags">
        <span class="tag-label">重点科室：</span>
        <span v-for="s in h.specialties" :key="s" class="tag">{{ s }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hospital-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  gap: 1.25em;
  margin: 1.5em 0;
}

.hospital-card {
  padding: 1.25em;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.75em;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.hospital-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px var(--vp-c-shadow, rgb(0 0 0 / 6%));
}

.card-header {
  display: flex;
  align-items: baseline;
  gap: 0.5em;
  flex-wrap: wrap;
  margin-bottom: 0.5em;
}

.card-name {
  margin: 0;
  font-size: 1.1em;
  color: var(--vp-c-text-1);
}

.card-badge {
  display: inline-block;
  padding: 0.1em 0.5em;
  border-radius: 0.3em;
  font-size: 0.75em;
  font-weight: 600;
  white-space: nowrap;
}

.badge-grade-a {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.badge-grade-b {
  background: var(--vp-c-default-2);
  color: var(--vp-c-text-1);
}

.card-desc {
  margin: 0.5em 0 0.75em;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.card-meta {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  margin-bottom: 0.75em;
}

.meta-item {
  display: flex;
  align-items: baseline;
  gap: 0.3em;
  font-size: 0.85em;
  color: var(--vp-c-text-2);
}

.meta-icon {
  flex-shrink: 0;
  font-size: 0.9em;
}

.meta-item a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.meta-item a:hover {
  text-decoration: underline;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35em;
  font-size: 0.8em;
}

.tag-label {
  color: var(--vp-c-text-3);
  flex-shrink: 0;
}

.tag {
  display: inline-block;
  padding: 0.1em 0.5em;
  border-radius: 0.3em;
  background: var(--vp-c-default-3);
  color: var(--vp-c-text-1);
  white-space: nowrap;
}
</style>
