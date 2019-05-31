<template>
  <q-page class="q-pa-xl">
    <h3 class="q-mt-none">Issues</h3>
    <q-list bordered separator>
      <q-item v-for="issue in issues" :key="issue.number" clickable v-ripple :to="'/issue/' + issue.number">
        <q-item-section side>
          <q-badge v-if="issue.state == 'open'" color="green">Open</q-badge>
          <q-badge v-else color="red">Close</q-badge>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ issue.title }}</q-item-label>
        </q-item-section>

        <!-- <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section> -->
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
import IssuesService from '../services/issues'
import Store from '../store'

export default {
  name: 'Listagem',
  data () {
    return {
      issues: [],
      filterState: 'all'
    }
  },
  methods: {
  },
  mounted () {
    IssuesService.listRepoIssues(Store.state.owner, Store.state.repository, this.filterState).then(response => {
      this.issues = response.data
      console.log('Issues caregadas')
      console.log(this.issues[1])
    })
  }
}
</script>
