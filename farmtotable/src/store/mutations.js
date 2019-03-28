export const STORAGE_KEY = 'farmtotable-key'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const mutations = {

    addProduce (state, produceToAdd) {
      state.allFarmers[state.allFarmers.length-1].produce.push(produceToAdd.produce);
      console.log(state.allFarmers[state.allFarmers.length-1])
    },

    addFarmer (state, farmerObj) {
      // console.log(state.allFarmers.name);
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