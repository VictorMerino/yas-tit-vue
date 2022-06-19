import { searchRestaurant } from '@/services/searchRestaurant'
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
      const { restaurants } = await searchRestaurant(term)
      this.restaurantList = restaurants
    },
    setActiveCategory(activeCategory: '') {
      this.activeCategory = activeCategory
      this.searchByTerm(activeCategory)
    },
  },
})
