<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue'
import RestaurantCategories from '../components/RestaurantCategories.vue'
import RestaurantList from '../components/RestaurantList.vue'
import { commonCategories } from '../db/common-categories'
import { searchRestaurant } from '../services/searchRestaurant'
import { ref } from 'vue'
// import yelp from '@/api/yelp'
console.log('Home')
const restaurantList = ref([])
const searchRestaurantsByTerm = async (term: string) => {
  console.log(term)
  const { restaurants } = await searchRestaurant(term)
  restaurantList.value = restaurants
}
</script>

<template>
  <main class="container">
    <h1 class="text-3xl mt-4">
      Grab your
      <br />
      <strong>delicious meal</strong>
    </h1>
    <SearchBar @searchTerm="searchRestaurantsByTerm" />
    <br /><br />
    <RestaurantCategories
      :categories="commonCategories"
      :active-item="{ name: 'steak', image: '' }" />
    Restaurants: <br />

    <RestaurantList :restaurants="restaurantList.businesses" />
  </main>
</template>
