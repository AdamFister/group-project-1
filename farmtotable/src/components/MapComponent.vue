<template>
  <div>
    <div><p>{{ lat }} {{ lon }}</p></div>
    <div><p>{{ error }}</p></div>
    <div><button @click = "myFunction()">Coords.</button></div>
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
    myFunction: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.error = "Geolocation is not supported.";
      }
    },
    showPosition: function(position) {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
    }
  }
};
</script>

<style>
#map {
  font-size: 30px;
}
</style>