/* eslint-disable promise/prefer-await-to-callbacks */
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 4000,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance
