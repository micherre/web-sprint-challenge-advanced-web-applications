import axios from 'axios'

export function axiosWithAuth() {

  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `${token}`
    }
  })
}