<script setup lang="ts">
import { searchRestaurant } from '@/services/searchRestaurants'
import { onMounted } from 'vue'

const props = defineProps<{
  id: string
}>()

onMounted(() => {
  searchRestaurant(props.id)
})
</script>

<template>
  <div class="container my-2 restaurant">
    <h1>This is the restaurant page {{ props.id }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .restaurant {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
