import { searchRestaurants } from '@/services/searchRestaurants'
import { defineStore } from 'pinia'
export const useRestaurantsStore = defineStore({
  id: 'restaurants',
  state: () => ({
    restaurantList: [],
    activeCategory: '',
    isLoading: false,
  }),
  actions: {
    async searchByTerm(term: string) {
      this.isLoading = true
      const { restaurants } = await searchRestaurants(term)
      this.isLoading = false
      this.restaurantList = restaurants
    },
    setActiveCategory(activeCategory = '') {
      this.activeCategory = activeCategory
      this.searchByTerm(activeCategory)
    },
  },
})
