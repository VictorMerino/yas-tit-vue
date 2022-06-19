<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue'
import RestaurantCategories from '../components/RestaurantCategories.vue'
import RestaurantList from '../components/RestaurantList.vue'
console.log('Home')
</script>

<template>
  <main class="container">
    <h1 class="text-3xl mt-4">
      Grab your
      <br />
      <strong>delicious meal</strong>
    </h1>
    <SearchBar />
    <br /><br />
    <RestaurantCategories />
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
