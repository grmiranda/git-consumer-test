import axios from 'axios'

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: 'https://api.github.com/',
    headers: { 'Authorization': 'token f7ba2a4ce9d3a71cac852e5cffef2d9c563679accc' }
  })
}
