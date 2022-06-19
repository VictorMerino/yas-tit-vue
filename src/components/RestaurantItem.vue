<script setup lang="ts">
defineProps<{
  restaurant: unknown
}>()
</script>

<template>
  <div>
    <pre>{{ restaurant.name }}</pre>
    <hr />
  </div>
</template>

<style scoped></style>
