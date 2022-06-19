<script setup lang="ts">
import { useRestaurantsStore } from '@/stores/restaurants'
import type { Item } from '@/types'

const props = defineProps<{
  category: Item
}>()

const restaurantsStore = useRestaurantsStore()

const handleClick = () => {
  restaurantsStore.setActiveCategory(props.category.name)
}
</script>

<template>
  <div
    style="
      background-color: #fff;
      border-radius: 50px;
      padding: 1.5em 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    "
    @click="handleClick">
    <img :src="category.image" style="width: 50px; height: 50px" />
    <p>{{ category.name }}</p>
  </div>
</template>
<style scoped></style>
