
const routes = [
  {
    path: '/',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/listagem',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Listagem.vue') },
      { path: '/issue/:number', component: () => import('pages/Issue.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
