<script setup lang="ts">
// OrganizationList — 学生组织与社团列表（数据驱动）
import organizations from '@/data/organizations.json'

interface Organization {
  id: string
  name: string
  type: string
  qq: string
  description: string
}

const typeColors: Record<string, string> = {
  '学生组织': 'type-union',
  '志愿公益': 'type-volunteer',
  '学术科技': 'type-academic',
  '文化艺术': 'type-art',
  '体育竞技': 'type-sports',
}
</script>

<template>
  <div class="org-list">
    <div v-for="org in (organizations as Organization[])" :key="org.id" class="org-card">
      <div class="card-header">
        <h3 class="card-name">{{ org.name }}</h3>
        <span class="card-type" :class="typeColors[org.type] || 'type-default'">
          {{ org.type }}
        </span>
      </div>
      <p class="card-desc">{{ org.description }}</p>
      <div v-if="org.qq" class="card-qq">
        <span class="qq-label">QQ 群：</span>
        <code>{{ org.qq }}</code>
      </div>
    </div>
  </div>
</template>

<style scoped>
.org-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
  gap: 1.25em;
  margin: 1.5em 0;
}

.org-card {
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.75em;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.org-card:hover {
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
  font-size: 1.05em;
  color: var(--vp-c-text-1);
}

.card-type {
  display: inline-block;
  padding: 0.1em 0.5em;
  border-radius: 0.3em;
  font-size: 0.75em;
  font-weight: 600;
  white-space: nowrap;
}

.type-union    { background: var(--vp-c-brand-1); color: #fff; }
.type-volunteer { background: var(--vp-c-tip-1); color: var(--vp-c-tip-text, #fff); }
.type-academic  { background: var(--vp-c-info-1); color: var(--vp-c-info-text, #fff); }
.type-art      { background: var(--vp-c-warning-1); color: var(--vp-c-warning-text, #fff); }
.type-sports   { background: var(--vp-c-danger-1); color: var(--vp-c-danger-text, #fff); }
.type-default  { background: var(--vp-c-default-2); color: var(--vp-c-text-1); }

.card-desc {
  flex: 1;
  margin: 0.5em 0 0.75em;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.card-qq {
  font-size: 0.85em;
  color: var(--vp-c-text-3);
  padding-top: 0.75em;
  border-top: 1px solid var(--vp-c-divider);
}

.qq-label {
  font-weight: 500;
}

.card-qq code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.95em;
}
</style>
