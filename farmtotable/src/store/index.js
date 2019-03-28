import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    farmers: {
      name: "",
      location: "",
      geolocation: [],
      produce: []
    },
    allFarmers: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),

    user: { 
        usergeolocation: []
    },
    searchResults: []  
  },
  mutations,
  actions,
  plugins
})
