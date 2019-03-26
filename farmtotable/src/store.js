import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    farmers: {
      name: "Joe",
      location: "Lexington, KY",
      produce: []
    }
  
  },
  mutations: {
    increment (state) {
      state.counter++;
    },
    decrement (state){
      state.counter--;
    },
    addProduce (state, produceToAdd) {
      state.farmers.produce.push(produceToAdd.name);
      console.log(state.farmers.produce);
    }
  },
  actions: {

  }
})
