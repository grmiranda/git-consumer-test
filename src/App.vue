<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import IssuesService from './services/issues'
import Store from './store'
export default {
  name: 'App',
  mounted () {
    IssuesService.getUser(Store.state.OAuthCode).then(response => {
      Store.state.user = response.data
    })
  }
}
</script>

<style>
</style>
