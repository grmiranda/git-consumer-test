<template>
  <q-page class="q-pa-xl">
    <h3 class="q-mt-none">Issue #{{ this.number }}</h3>
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
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Obrigatório']"
      />

      <div>
        <q-btn label="Salvar" type="submit" color="primary"/>
      </div>
    </q-form>
    <div class="col q-pl-md">
      dasd
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

    IssuesService.getIssueByNumber(Store.state.owner, Store.state.repository, this.number).then(response => {
      this.issue = response.data
      console.log('Issue #' + this.number + ' caregada')
      console.log(this.issue)
    })
  }
}
</script>
