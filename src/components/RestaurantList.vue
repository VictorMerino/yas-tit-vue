<script setup lang="ts">
defineProps<{
  restaurants: []
}>()
</script>

<template>
  <div>
    Restaurants list cm<br />
    <pre>{{ restaurants }}</pre>
  </div>
</template>

<style scoped></style>
