import axios from 'axios'

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: 'https://api.github.com/',
    headers: { 'Authorization': 'token 91e172964e993b2ed7621a7693c5bb27d64246f1' }
  })
}
