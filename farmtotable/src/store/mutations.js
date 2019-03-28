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
    },

    addUserCoords (state, pos) {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      // console.log("lat:",lat);
      // console.log("lon:",lon);
      state.user.usergeolocation.push(lat);
      state.user.usergeolocation.push(lon);
    },

    searchForProduce (state, produceObj) {
      // console.log(state.allFarmers.length);
      // console.log(produceObj.item);
      // console.log(state.allFarmers[0].produce[0].name);
      
      for (let i=0; i<state.allFarmers.length; i++) {
        if (state.allFarmers[i].produce[0].name == produceObj.item) {
          // console.log("FARMER HAS IT");
          // console.log(state.allFarmers[i]);
          state.searchResults.push(state.allFarmers[i]);
        }
      }
    }

  }