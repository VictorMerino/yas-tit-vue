<script setup lang="ts">
import type { Restaurant } from '@/types'

defineProps<{
  restaurant: Restaurant
}>()
const goToRestaurant = (id: string) => {
  console.log(id)
}
</script>

<template>
  <div @click="goToRestaurant(restaurant.id)">
    <p>{{ restaurant.name }}</p>
    <img :src="restaurant.image_url" />
    <p>{{ restaurant.rating }}</p>
    <p>{{ restaurant.price }}</p>
    <hr />
  </div>
</template>

<style scoped></style>
