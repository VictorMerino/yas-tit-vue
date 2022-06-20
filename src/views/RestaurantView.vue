<script setup lang="ts">
import { searchRestaurant } from '@/services/searchRestaurants'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  id: string
}>()
const restaurantPhotos = ref({})
const restaurantName = ref('')
onMounted(() => {
  searchRestaurant(props.id).then(restaurant => {
    console.log(restaurant)
    console.log(restaurant.restaurant)
    restaurantPhotos.value = restaurant.restaurant.photos
    restaurantName.value = restaurant.restaurant.name
  })
})
</script>

<template>
  <div class="container my-2">
    <router-link :to="{ name: 'home' }">&lt; Go back</router-link>
    <h1 class="my-2 text-center">
      Restaurant <strong>{{ restaurantName }}</strong>
    </h1>
    <div class="restaurant">
      <template v-for="(photo, index) in restaurantPhotos" :key="index">
        <img :src="photo" />
      </template>
    </div>
  </div>
</template>

<style>
.restaurant {
  grid-gap: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
}
</style>
