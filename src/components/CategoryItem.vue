<script setup lang="ts">
import type { Item } from '@/types'

defineProps<{
  category: Item
}>()
</script>

<template>
  <div
    style="
      background-color: #fff;
      border-radius: 50px;
      padding: 1.5em 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    ">
    <img :src="category.image" style="width: 50px; height: 50px" />
    <p>{{ category.name }}</p>
  </div>
</template>
<style scoped></style>
