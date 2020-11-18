import axios from 'axios'

export const API_URL = 'http://localhost:5001/make-your-pizza-app/us-central1/api'

const fetch = () => {
  const defaultOptions = {
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const instance = axios.create(defaultOptions)

  return instance
}

export default fetch()