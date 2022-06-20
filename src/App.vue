<script setup lang="ts">
import Header from './components/structure/AppHeader.vue'
import { useRestaurantsStore } from './stores/restaurants'
const restaurantsStore = useRestaurantsStore()
</script>
<template>
  <Header />
  <div class="loading" v-if="restaurantsStore.isLoading" />
  <div>
    <RouterView />
  </div>
</template>
