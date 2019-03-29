

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