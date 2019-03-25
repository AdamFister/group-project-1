<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
 
    <notification></notification>
    <radius></radius>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MapComponent></MapComponent>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import notification from "./components/notification.vue";
import radius from "./components/radius.vue";


export default {
  name: "app",
  components: {
    HelloWorld,
    notification,
    radius,
    MapComponent
  },
  mounted: function () {
    var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

    mapboxgl.accessToken =
    "pk.eyJ1Ijoic21vaGVyZWlnaHQiLCJhIjoiY2p0b284NHhkMGdhMzN5bXFvYWR2NWNiMSJ9.9w212cQxAkYNm0lPrPtZVg";
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11"
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
