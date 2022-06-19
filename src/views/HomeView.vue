<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue'
import RestaurantCategories from '../components/RestaurantCategories.vue'
import RestaurantList from '../components/RestaurantList.vue'
import { commonCategories } from '../db/common-categories'
import yelp from '@/api/yelp'
console.log('Home')
const searchRestaurantsByTerm = async (term: string) => {
  console.log(term)
  const response = await yelp.get('/search', {
    params: {
      limit: 12,
      term,
      location: 'Toronto'
    }
  })
  console.log(response)
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

    <RestaurantList />
  </main>
</template>

<!-- <template>
  <Header />
  <Search setTerm={(term: string) => setActiveItem(term)}
  activeItem={activeItem} />
  <Categories
    categories="{commonCategories}"
    activeItem="{activeItem}"
    setCategory="{setActiveItem}" />
  <Restaurants term="{activeItem}" />
  <StatusBar />
</template> -->
