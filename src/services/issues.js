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
  },
  lockIssue: (owner, repository, number) => {
    return Vue.prototype.$axios.put('/repos/' + owner + '/' + repository + '/issues/' + number + '/lock', {
      params: {
        locked: true,
        active_lock_reason: 'Via API'
      }
    })
  },
  unlockIssue: (owner, repository, number) => {
    return Vue.prototype.$axios.delete('/repos/' + owner + '/' + repository + '/issues/' + number + '/lock', {
      params: {
        locked: false,
        active_lock_reason: 'Via API'
      }
    })
  },
  createIssue: (owner, repository, title, body) => {
    return Vue.prototype.$axios.post('repos/' + owner + '/' + repository + '/issues', {
      title: title,
      body: body
    })
  },
  updateIssue: (owner, repository, number, title, body) => {
    return Vue.prototype.$axios.patch('repos/' + owner + '/' + repository + '/issues/' + number, {
      title: title,
      body: body
    })
  },
  getUser: () => {
    return Vue.prototype.$axios.get('user')
  }
}
