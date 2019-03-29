export const STORAGE_KEY = 'farmtotable-key'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
	window.localStorage.clear()
}

export const mutations = {

    addUserCoords (state, pos) {
      let lat = pos.lat;
      let lon = pos.lng;
      console.log("lat:",lat);
      console.log("lon:",lon);
      state.user.usergeolocation.push({lat:lat, lng:lon})
    },
        
      
  addProduce(state, produceToAdd) {
    state.allFarmers[state.allFarmers.length - 1].produce.push(produceToAdd.produce);
  },

  addFarmer(state, farmerObj) {
    state.allFarmers.push(farmerObj);




    // console.log(state.allFarmers.name);
    // if (state.allFarmers.length != 0) {
    //   for (let i = 0; i < state.allFarmers.length; i++) {
    //     console.log("name_entered: " + farmerObj.name);
    //     console.log("existing name: " + state.allFarmers[i].name + i);
    //     if (farmerObj.name == state.allFarmers[i].name) {
    //       console.log("FARMER NAME TAKEN");
          
    //     }
    //     else if (farmerObj.name != state.allFarmers[i].name){
    //       console.log("PUSH ONE");
    //       state.allFarmers.push(farmerObj);
    //     }
    //   }
    // } else {
    //   console.log("PUSH TWO");
    //   state.allFarmers.push(farmerObj);
    // }
  },

  addUserCoords(state, pos) {
    let lat = pos.lat;
    let lon = pos.lng;
    // console.log("lat:",lat);
    // console.log("lon:",lon);
    state.user.usergeolocation.push({lat:lat, lng:lon});
  },

  searchForProduce(state, produceObj) {
    // console.log(state.allFarmers.length);
    // console.log(produceObj.item);
    // console.log(state.allFarmers[0].produce[0].name);

    for (let i = 0; i < state.allFarmers.length; i++) {
      let produceLength = state.allFarmers[i].produce.length;
      for (let j = 0; j < produceLength; j++) {
        if (state.allFarmers[i].produce[j].name == produceObj.item) {
          console.log("FARMER HAS " + produceObj.item);
          // console.log(state.allFarmers[i]);
          state.searchResults.push(state.allFarmers[i]);
        }
      }

    }
  },
  recipeResultsHandler(state, recipeResults) {
    state.recipe = recipeResults;
  }

}