<template>
  <q-page class="q-pa-xl">
    <h3 class="q-mt-none">Issue #{{ this.number }}</h3>
  </q-page>
</template>

<style>
</style>

<script>
import IssuesService from '../services/issues'
import Store from '../store'

export default {
  name: 'Issue',
  data () {
    return {
      issue: {},
      number: 0
    }
  },
  methods: {
  },
  mounted () {
    this.number = this.$route.params.number

    IssuesService.getIssueByNumber(Store.state.owner, Store.state.repository, this.number).then(response => {
      this.issue = response.data
      console.log('Issue #' + this.number + ' caregada')
      console.log(this.issue)
    })
  }
}
</script>
