export const STORAGE_KEY = 'farmtotable-key'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const mutations = {
    // increment (state) {
    //   state.counter++;
    // },
    // decrement (state){
    //   state.counter--;
    // },
    addProduce (state, produceToAdd) {
      state.allFarmers[allFarmers.length-1].produce.push(produceToAdd.produce);
      console.log(state.allFarmers[allFarmers.length-1])
    },
    // addName (state, nameToAdd) {
    //   state.farmers.name = nameToAdd.name;
    // },
    // addLocation (state, locationToAdd) {
    //   state.farmers.location = locationToAdd.location;
    // },
    addFarmer (state, farmerObj) {
      state.allFarmers.push(farmerObj);
    }
  }