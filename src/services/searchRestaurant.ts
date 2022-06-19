export const searchRestaurant = async (term: string) => {
  return await fetch(`http://localhost:3030/search-restaurant?term=${term}`)
    .then((result) => result.json())
    .catch((error) => console.log(error))
}
