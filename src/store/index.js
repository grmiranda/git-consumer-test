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
  repository: 'vagas',
  owner: 'devfsa'
  // repository: 'quasar',
  // owner: 'quasarframework'
}

// define possible mutations
const mutations = {
}

export default new Vuex.Store({
  state,
  mutations
})
