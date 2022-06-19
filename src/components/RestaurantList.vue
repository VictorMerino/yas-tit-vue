<script setup lang="ts">
import RestaurantItem from './RestaurantItem.vue'
defineProps<{
  restaurants: []
}>()
</script>

<template>
  <div>
    <p class="mb-2">Restaurants:</p>
    <RestaurantItem
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :restaurant="restaurant" />
  </div>
</template>

<style scoped></style>
