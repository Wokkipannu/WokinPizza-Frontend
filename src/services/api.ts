import axios from 'axios'

export interface Pizza {
  id: string,
  created_at: string,
  updated_at: string,
  name: string,
  description: string,
  toppings: string,
  image: string,
  thumbnail: string
}

export interface User {
  access_level: string,
  avatar: string,
  email: string,
  exp: number,
  id: string,
  token: {
    access_token: string,
    refresh_token: string,
    token_type: string,
    expiry: string
  }
  username: string,
}

const API = axios.create({
  baseURL: '/api/',
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

export const logout = () => {
  return API.get('/auth/logout')
}

export const getUser = () => {
  return new Promise((resolve, reject) => {
    API.get('/auth/user')
      .then(res => {
        resolve(res.data.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const updatePizza = (data: Pizza) => {
  return new Promise((resolve, reject) => {
    API.put('/pizza', data)
      .then(res => {
        resolve(res.data.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const createPizza = (data: Pizza) => {
  API.post('/pizza', { data })
}

export const deletePizza = (id: string) => {
  API.delete('/pizza', { data: { id } })
}