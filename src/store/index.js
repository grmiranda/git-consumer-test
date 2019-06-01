import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

// app initial state
const state = {
  repository: 'git-consumer-test',
  owner: 'grmiranda',
  user: {}
}

// define possible mutations
const mutations = {
  setOAuthCode (state, code) {
    state.OAuthCode = code
  }
}

export default new Vuex.Store({
  state,
  mutations
})
