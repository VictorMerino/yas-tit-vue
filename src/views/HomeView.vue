<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue'
import RestaurantCategories from '../components/RestaurantCategories.vue'
import RestaurantList from '../components/RestaurantList.vue'
import { commonCategories } from '../db/common-categories'
import { useRestaurantsStore } from '@/stores/restaurants'
import { computed } from 'vue'

const restaurantsStore = useRestaurantsStore()
const restaurantList = computed(() => restaurantsStore.restaurantList)
const activeItem = computed(() => restaurantsStore.activeCategory)
const searchRestaurantsByTerm = async (term: string) =>
  restaurantsStore.searchByTerm(term)
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
      :active-item="activeItem" />

    <RestaurantList :restaurants="restaurantList.businesses" />
  </main>
</template>
