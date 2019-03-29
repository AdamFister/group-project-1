import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";


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
    farmerObj.geolocation.push({ "lat": lat, "lng": lng });
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

    for (var i = 0; i < state.allFarmers.length; i++) {
      // variables for farmer's latitude and longitude
      var lat1 = parseInt(state.allFarmers[i].geolocation[0].lat);
      var lon1 = parseInt(state.allFarmers[i].geolocation[0].lng);

      // variables for consumer's latitude and longitude
      var lon2 = state.user.usergeolocation[0].lng;
      var lat2 = state.user.usergeolocation[0].lat;

      // variable set for pi
      var pi = Math.PI;

      // variable set for Earth's radius in kilometers
      var R = 6371;

      // math turning the farmer's and consumer's latitudes and longitudes into radians, eventually ending in the distance betwen the two's coordinates in miles
      var φ1 = lat1 * (pi / 180);
      var φ2 = lat2 * (pi / 180);
      var Δφ = (lat2 - lat1) * (pi / 180);
      var Δλ = (lon2 - lon1) * (pi / 180);

      var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      var d = (R * c);
      console.log(d);

      // looping through farmer's in farmer object to get proximity between each farmer and user
    }
  }
}

	addFarmerAction({ state, commit }, farmerObj) {
		commit('addFarmer', farmerObj);
	},
	async getRecipesByRandom({ state, commit }, 		) {
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
    addFarmerHandler( { state, commit }, farmerObj) {
        if (state.allFarmers.length != 0) {
            for (let i = 0; i < state.allFarmers.length; i++) { 
                console.log("name_entered: " + farmerObj.name);
                console.log("existing name: " + state.allFarmers[i].name + i);
                if (farmerObj.name == state.allFarmers[i].name) {
                    console.log("FARMER NAME TAKEN");
                    return 0;
                } 
    
            } console.log("NO MATCHES");
              commit("addFarmer", farmerObj);

        } else {
            console.log("PUSH TWO");
            commit("addFarmer", farmerObj);
        }
    }
}

