<template>
  <div>
    <div><p>Lat = {{ lat }} Long = {{ lon }}</p></div>
    <div><p>{{ error }}</p></div>
    <div><button @click = "getUserCoords()">Get Location</button></div>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {
    error: "",
    lat: "",
    lon: ""
    }
  },
  methods: {
    getUserCoords: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.error = "Geolocation is not supported.";
      }
    },
    showPosition: function(position) {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      console.log(position);

      this.$store.commit("addUserCoords", position);
      console.log(this.$store.state.user.usergeolocation);
    }
  }
};
</script>

<style>
#map {
  font-size: 30px;
}
</style>