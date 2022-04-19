import axios from 'axios'

export default interface Pizza {
  id: string,
  created_at: string,
  updated_at: string,
  name: string,
  description: string,
  toppings: string,
  image: string,
  thumbnail: string
}

const API = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getPizzas = () => {
  return API.get('/pizza')
}

export const getDailyToppings = () => {
  return API.get('/dailytoppings')
}