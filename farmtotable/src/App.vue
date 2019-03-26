<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <MapComponent></MapComponent>
  </div>
</template>

<script>
import MapComponent from "./components/MapComponent.vue";

export default {
  name: "app",
  components: {
    MapComponent
  },
  mounted: function() {
    var map;
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 38.0355597, lng: -84.4924768 },
      zoom: 8
    });
    
  }
  
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

