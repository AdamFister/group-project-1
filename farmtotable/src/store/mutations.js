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
      state.allFarmers[state.allFarmers.length-1].produce.push(produceToAdd.produce);
      console.log(state.allFarmers[state.allFarmers.length-1])
    },
    // addName (state, nameToAdd) {
    //   state.farmers.name = nameToAdd.name;
    // },
    // addLocation (state, locationToAdd) {
    //   state.farmers.location = locationToAdd.location;
    // },
    addFarmer (state, farmerObj) {
      state.allFarmers.push(farmerObj);
    },

    addUserCoords (state, pos) {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      console.log("lat:",lat);
      console.log("lon:",lon);
      state.user.usergeolocation.push(lat);
      state.user.usergeolocation.push(lon);
    }
  }