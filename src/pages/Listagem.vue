<template>
  <q-page class="q-pa-xl">
    <h3 class="q-mt-none">Issues</h3>
    <q-list>
      <q-item v-for="issue in issues" :key="issue.id" clickable v-ripple>
        <q-item-section side>
          <q-icon v-if="issue.state == 'open'" name="info" color="green" />
          <q-icon v-if="issue.state == 'closed'" name="cancel" color="red" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ issue.title }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
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
