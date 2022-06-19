<script setup lang="ts">
import type { Category, Item } from '@/types'
// setCategory: Function

defineProps<{
  categories: Category[]
  activeItem: Item
}>()
</script>
<template>
  <div>Active Item: {{ activeItem }}</div>
</template>
