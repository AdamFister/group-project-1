export default {

  addFarmerAction({ state, commit }, farmerObj) {
    commit('addFarmer', farmerObj)
  },

  async getFarmerLocation({ state, commit }, farmerObj) {
    // takes farmer address and turns it into an executable URL in preparation for the geocoding API call
    var startOfUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var endOfUrl = "&key=AIzaSyAJdT4Cpfd-EjZ6oHal-O0V3prR2AL5nH4";
    var farmerUrl = farmerObj.location.split(' ').join('+');
    var finalUrl = startOfUrl + farmerUrl + endOfUrl;
    console.log(finalUrl);

    // fetching JSON data associated with farmer address/created URL from above
    var data = await fetch(finalUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {

        return myJson;
      });

    // setting variables for farmer latitude and longitude
    console.log(farmerObj);
    var lat = data.results[0].geometry.location.lat;
    var lng = data.results[0].geometry.location.lng;
    farmerObj.geoLocation.lat = lat;
    farmerObj.geoLocation.lng = lng;
    // farmerObj.geolocation.push({"lng": lng});

    // commit farmer with location data      
    commit("addFarmer", farmerObj);
  },

  getUserLocation({ state, commit }) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          commit("addUserCoords", { lat: lat, lng: lng });
          console.log(state.user.usergeolocation);
        });
    } else {
      this.error = "Geolocation is not supported.";
    }
  },

  evaluateProximity({ state, commit }, farmerObj) {
    var unit = "M";
    // looping through farmer's in farmer object to get proximity between each farmer and user
    // for (var i = 0; i < state.allFarmers.length; i++) {
      // variables for farmer's latitude and longitude
      var lat1 = farmerObj.geoLocation.lat;
      var lon1 = farmerObj.geoLocation.lng;
 
      // variables for consumer's latitude and longitude
      console.log(state.user.usergeolocation);
      var lon2 = state.user.usergeolocation[0].lng;
      var lat2 = state.user.usergeolocation[0].lat;
 
      // math for determining distance between consumer's location and farmer's location
      var d = 0;
      if ((lat1 == lat2) && (lon1 == lon2)) {
        d = 0;
      }
      else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        d = dist;
      }
      console.log(d);
      return d;
  },

  searchForProduce({state, commit}, produceObj) {
 
    var tempSearch = [];
    
    for (let i = 0; i < state.allFarmers.length; i++) {
      let produceLength = state.allFarmers[i].produce.length;
      for (let j = 0; j < produceLength; j++) {
        if (state.allFarmers[i].produce[j].name == produceObj.item) {

          var promiseDistance = this.dispatch("evaluateProximity", state.allFarmers[i]);
          promiseDistance.then(function(value) {
            if(value < 10){
              tempSearch.push(state.allFarmers[i]);
            }
          }); 
        }
      }
    }
    this.commit("validateProduceSearch", tempSearch);
  },

  addFarmerHandler({ state, commit }, farmerObj) {
      if (state.allFarmers.length != 0) {
          for (let i = 0; i < state.allFarmers.length; i++) {
              console.log("name_entered: " + farmerObj.name);
              console.log("existing name: " + state.allFarmers[i].name + i);
              if (farmerObj.name == state.allFarmers[i].name) {
                  console.log("FARMER NAME TAKEN");
                  return 0;
              }

          } console.log("NO MATCHES");
          //commit("addFarmer", farmerObj);
          this.dispatch('getFarmerLocation', farmerObj);

      } else {
          console.log("PUSH TWO");
          this.dispatch('getFarmerLocation', farmerObj);
      }
  },
  async getRecipesByRandom({ state, commit }) {
      fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1', {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
              "X-RapidAPI-Key": "a585a9b005msh459bd2f7657ed56p17e34bjsn1f0dd44c7986"
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
      })
          .then(
              function (response) {
                  if (response.status !== 200) {
                      console.log('Looks like there was a problem. Status Code: ' +
                          response.status);
                      return;
                  }

                  // Examine the text in the response
                  response.json().then(function (data) {
                      //console.log("about to enter reciperesltshander actions.js line 30");
                      console.log(data.recipes[0]);
                      commit('recipeResultsHandler', data.recipes[0]);
                  });
              }
          )
          .catch(function (err) {
              console.log('Fetch Error :-S', err);
          });

  },

}


