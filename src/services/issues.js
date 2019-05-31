import Vue from 'vue'

export default {

  listRepoIssues: (owner, repository, state) => {
    return Vue.prototype.$axios.get('repos/' + owner + '/' + repository + '/issues', {
      params: {
        state: state
      }
    })
  },
  getIssueByNumber: (owner, repository, number) => {
    return Vue.prototype.$axios.get('repos/' + owner + '/' + repository + '/issues/' + number)
  }
}
