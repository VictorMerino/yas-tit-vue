<script setup lang="ts">
import useDebouncedRef from '@/composables/useDebouncedRef'
import type { Item } from '@/types'
import { watch } from 'vue'

const props = defineProps<{
  activeItem: Item
}>()

const emit = defineEmits<{
  (e: 'searchTerm', text: string): void
}>()

const searchField = useDebouncedRef('', 400, false)
function searchText() {
  if (!searchField.value) return
  emit('searchTerm', searchField.value)
}
watch(props, () => (searchField.value = props.activeItem))
watch(searchField, () => searchText())
</script>
<template>
  <div>
    <input
      type="search"
      name="restaurantType"
      id="restaurantType"
      data-testid="search-input"
      placeholder="Search restaurant type"
      v-model="searchField" />
  </div>
</template>
<style scoped>
div {
  margin-top: 24px;
}
input {
  border-radius: 40px;
  padding: 1em;
  font-size: 20px;
}
</style>
