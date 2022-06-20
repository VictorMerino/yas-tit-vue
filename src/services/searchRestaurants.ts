const BASE_URL = 'http://localhost:3030'

export const searchRestaurants = async (term: string) => {
  return await fetch(`${BASE_URL}/search-restaurants?term=${term}`)
    .then((result) => result.json())
    .catch((error) => console.log(error))
}

export const searchRestaurant = async (restaurantId: string) => {
  return await fetch(`${BASE_URL}/search-restaurant?id=${restaurantId}`)
    .then((result) => result.json())
    .catch((error) => console.log(error))
}
