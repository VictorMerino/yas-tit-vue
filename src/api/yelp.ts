import axios from 'axios'

// import { REACT_APP_YELP_APIKEY } from '@env'
const API_KEY = import.meta.env.VITE_YELP_APIKEY
console.log(API_KEY)

const baseURL = 'https://api.yelp.com/v3/businesses'

// console.log('apiKey: ' + REACT_APP_YELP_APIKEY)
export default axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
})
