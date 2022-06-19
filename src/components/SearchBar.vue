<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'searchTerm', text: string): void
}>()

const searchField = ref('')
function searchText() {
  if (!searchField.value) return
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
<style scoped>
div {
  margin-top: 12px;
}
input {
  border-radius: 40px;
  padding: 1em;
  font-size: 20px;
}
</style>
