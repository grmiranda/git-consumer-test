import axios from 'axios'

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: 'https://api.github.com/',
    headers: { 'Authorization': 'token 7bf0772dd711b9e5541516148ef4e30bc0019c85' }
  })
}
