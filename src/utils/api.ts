import axios from 'axios'

export const API_URL = 'https://us-central1-make-your-pizza-app.cloudfunctions.net/api'

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