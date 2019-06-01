<template>
  <q-page class="q-pa-xl">
    <h3 class="q-mt-none flex">Issues <q-btn round color="positive" icon="add" to="/issue/" /></h3>
    <q-list bordered separator>
      <q-item v-for="issue in issues" :key="issue.number" clickable v-ripple :to="'/issue/' + issue.number">
        <q-item-section side>
          <q-icon v-if="issue.state == 'open'" name="info" color="green" class="list-item-icon" />
          <q-icon v-if="issue.state == 'closed'" name="cancel" color="red" class="list-item-icon" />
        </q-item-section>

        <q-item-section >
          <q-item-label class="list-item-title" >{{ issue.title }}</q-item-label>
          <div v-if="issue.labels[0]" class="flex q-mt-sm list-item-badge">
            <q-badge v-for="label in issue.labels" :key="label.id" class="q-mr-sm">{{ label.name }}</q-badge>
          </div>
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
    })
  }
}
</script>
