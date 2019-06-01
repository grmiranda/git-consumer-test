<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<style>
</style>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script>
import IssuesService from '../services/issues'
import Store from '../store'

export default {
  name: 'UserCallback',
  data () {
    return {
      code: ''
    }
  },
  methods: {
  },
  mounted () {
    // $.ajax({
    //   url: 'https://api.github.com/user',
    //   type: 'get',
    //   crossDomain: true,
    //   headers: {
    //     'Authorization': 'token 7bf0772dd711b9e5541516148ef4e30bc0019c85'
    //   },
    //   dataType: 'json',
    // }).then( function (result) {
    //   console.log(result)
    // });
  }
}
</script>
