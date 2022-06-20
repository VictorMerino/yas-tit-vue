<script setup lang="ts">
import router from '@/router'
import type { Restaurant } from '@/types'

defineProps<{
  restaurant: Restaurant
}>()
const goToRestaurant = (id: string) => {
  router.push({ name: 'restaurant', params: { id } })
}
</script>

<template>
  <a class="restaurant-wrapper" @click="goToRestaurant(restaurant.id)">
    <img :src="restaurant.image_url" />
    <div class="restaurant__info--container">
      <p class="restaurant__name">{{ restaurant.name }}</p>
      <div class="restaurant__info">
        <p class="restaurant__rating">{{ restaurant.rating }}</p>
        <p class="restaurant__price">{{ restaurant.price }}</p>
      </div>
    </div>

    <hr />
  </a>
</template>

<style scoped>
.restaurant-wrapper {
  background-color: #fff;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  border-radius: 50px;
  margin-block: 10px;
}
img {
  width: 75px;
  height: 75px;
  border-radius: 50px;
  margin-inline: 10px;
}

.restaurant__info--container {
  flex: 1;
}
.restaurant__info {
  display: flex;
}
.restaurant__name {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1em;
}
.restaurant__rating {
  margin-right: 20px;
}
.restaurant__price {
  color: gold;
}
</style>
