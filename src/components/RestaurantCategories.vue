<script setup lang="ts">
import type { Item } from '@/types'
import CategoryItem from './CategoryItem.vue'
// setCategory: Function

defineProps<{
  categories: Item[]
  activeItem: Item
}>()
</script>
<template>
  <div class="categories-wrapper">
    <CategoryItem
      v-for="category in categories"
      :key="category.name"
      :category="category" />
  </div>

  <div>Active Item: {{ activeItem }}</div>
</template>

<style>
.categories-wrapper {
  display: flex;
  gap: 2em;
  max-width: 100vw;
  margin-bottom: 1em;
  overflow-x: auto;
}
</style>
