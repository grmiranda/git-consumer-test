<template>
  <q-page class="q-pa-xl">
    <h3 v-if="this.number" class="q-mt-none">
      Issue #{{ this.number }}
      <q-badge v-for="label in issue.labels" :key="label.id" align="middle" class="q-mr-sm">{{ label.name }}</q-badge>
      <h6 class="q-mt-none text-grey-5">{{ this.title }}</h6>
    </h3>
    <h3 v-else class="q-mt-none">
      Nova Issue
    </h3>
    <div class="row">
      <q-form @submit="saveIssue()" class="col q-pr-md">
      <q-input
        class="q-mb-sm"
        filled
        v-model="issue.title"
        label="Titulo"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Obrigatório']"
      />
      <q-input
        class="q-mb-sm"
        filled
        v-model="issue.body"
        label="Descrição"
        type="textarea"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Obrigatório']"
      />
      <div>
        <q-btn label="Salvar" type="submit" color="primary"/>
        <q-btn v-if="!this.issue.locked && this.number != null" label="Lock Issue" type="submit" color="negative" flat class="q-ml-lg" @click="LockIssue()"/>
        <q-btn v-else-if="this.number != null" label="Unlock Issue" type="submit" color="positive" flat class="q-ml-lg" @click="UnlockIssue()"/>
      </div>
    </q-form>
    <div v-if="this.number != null" class="col q-pl-md">
      <!-- <h6 class="q-mt-none">Comentários:</h6> -->
    </div>
    <div v-else class="col"></div>
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
      issue: {
        title: '',
        body: ''
      },
      number: 0
    }
  },
  methods: {
    saveIssue () {
      if (this.number) {
        // editar
        IssuesService.updateIssue(Store.state.owner, Store.state.repository, this.number, this.issue.title, this.issue.body).then(response => {
          this.issue = response.data
          alert('Issue salva com sucesso')
        })
      } else {
        // cadastrar
        IssuesService.createIssue(Store.state.owner, Store.state.repository, this.issue.title, this.issue.body).then(response => {
          this.issue = response.data
          this.number = this.issue.number
          alert('Issue cadastrada com sucesso')
          this.$router.push({ path: '/listagem' })
        })
      }
    },
    LockIssue () {
      IssuesService.lockIssue(Store.state.owner, Store.state.repository, this.number).then(response => {
        this.issue.locked = true
        alert('Issue bloqueada')
      })
    },
    UnlockIssue () {
      IssuesService.unlockIssue(Store.state.owner, Store.state.repository, this.number).then(response => {
        this.issue.locked = false
        alert('Issue desloqueada')
      })
    }
  },
  mounted () {
    this.number = this.$route.params.number
    this.title = Store.state.owner + '/' + Store.state.repository
    if (this.number) {
      IssuesService.getIssueByNumber(Store.state.owner, Store.state.repository, this.number).then(response => {
        this.issue = response.data
      })
    }
  }
}
</script>
