import dotenv from 'dotenv'
import express from 'express'
import axios from 'axios'

import path from 'path'
import cors from 'cors'

const app = express()
app.use(express.static(path.resolve(path.join('/public')))).use(cors())

const serverPort = 3030

dotenv.config()

const API_KEY = process.env.VITE_YELP_APIKEY
console.log(API_KEY)

const baseURL = 'https://api.yelp.com/v3/businesses'

const yelp = () => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
}

const searchRestaurant = async (term = 'burger') => {
  console.log('In search', term)
  return await yelp().get('/search', {
    params: {
      limit: 12,
      term,
      location: 'Toronto',
    },
  })
}

app.get('/search-restaurant', async (req, res) => {
  const response = await searchRestaurant(req.query.term)
  res.json({ restaurants: response.data })
})

app.listen(serverPort)
