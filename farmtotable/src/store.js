import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    farmers: {
      name: "",
      location: "",
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
      state.farmers.produce.push(produceToAdd.produce);
      console.log(state.farmers.produce);
    },
    addName (state, nameToAdd) {
      state.farmers.name = nameToAdd.name;
    },
    addLocation (state, locationToAdd) {
      state.farmers.location = locationToAdd.location;
    }
  },
  actions: {

  }
})
