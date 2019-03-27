export const STORAGE_KEY = 'farmtotable-key'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const mutations = {

    addProduce (state, produceToAdd) {
      state.allFarmers[state.allFarmers.length-1].produce.push(produceToAdd.produce);
    },

    addFarmer (state, farmerObj) {
      // console.log(state.allFarmers.name);
      state.allFarmers.push(farmerObj);
    }
  }