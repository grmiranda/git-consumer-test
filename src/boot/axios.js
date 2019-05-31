import axios from 'axios'

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: 'https://api.github.com/'
  })
}
