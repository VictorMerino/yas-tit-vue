export interface Item {
  name: string
  image: string
}
export interface Category {
  categories: []
  activeItem: Item
}

export interface Restaurant {
  id: string
  image_url: string
  name: string
  rating: string
  price: string
}
