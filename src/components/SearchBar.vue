<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'searchTerm', text: string): void
}>()

const searchField = ref('')
function searchText() {
  emit('searchTerm', searchField.value)
}
</script>
<template>
  <div>
    <input
      type="search"
      name="restaurantType"
      id="restaurantType"
      v-model="searchField"
      @input="searchText" />
  </div>
</template>
<style scoped></style>
