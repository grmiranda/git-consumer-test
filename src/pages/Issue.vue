<template>
  <q-page class="q-pa-xl">
    <h3 class="q-mt-none">
      Issue #{{ this.number }}
      <q-badge v-for="label in issue.labels" :key="label.id" align="middle" class="q-mr-sm">{{ label.name }}</q-badge>
      <h6 class="q-mt-none text-grey-5">{{ this.title }}</h6>
    </h3>
    <div class="row">
      <q-form @submit="saveIssue" class="col q-pr-md">
      <q-input
        filled
        v-model="this.issue.title"
        label="Titulo"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Obrigatório']"
      />
      <q-input
        filled
        v-model="this.issue.body"
        label="Descrição"
        type="textarea"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Obrigatório']"
      />
      <div>
        <q-btn label="Salvar" type="submit" color="primary"/>
        <q-btn v-if="this.issue.state == 'open'" label="Close Issue" type="submit" color="negative" flat class="q-ml-lg"/>
        <q-btn v-else label="Reopen Issue" type="submit" color="positive" flat class="q-ml-lg"/>
      </div>
    </q-form>
    <div class="col q-pl-md">
      <h6 class="q-mt-none">Comentários:</h6>
    </div>
    </div>
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
      title: '',
      issue: {},
      number: 0
    }
  },
  methods: {
    saveIssue () {
      console.log('Salvar')
    }
  },
  mounted () {
    this.number = this.$route.params.number
    this.title = Store.state.owner + '/' + Store.state.repository
    IssuesService.getIssueByNumber(Store.state.owner, Store.state.repository, this.number).then(response => {
      this.issue = response.data
      console.log('Issue #' + this.number + ' caregada')
      console.log(this.issue)
    })
  }
}
</script>
