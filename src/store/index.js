import Vue from 'vue'
import Vuex from 'vuex'

import users from './module/users'
import app from './module/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    users,
    app
  }
})
