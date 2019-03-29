

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
    var unit = "M";
    // looping through farmer's in farmer object to get proximity between each farmer and user
    // for (var i = 0; i < state.allFarmers.length; i++) {

      // variables for farmer's latitude and longitude
      var lat1 = farmerObj.geolocation[0].lat;
      var lon1 = farmerObj.geolocation[0].lng;

      // variables for consumer's latitude and longitude
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
    }
  }
// }