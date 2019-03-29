<template>
  <div id="app">
    <div id="nav">

    <MapComponent></MapComponent>
      <router-link to="/">Provider</router-link> | 
      <router-link to="/consumer">Consumer</router-link>

    </div>
    <router-view/>
  </div>
</template>

<script>
import MapComponent from "./components/MapComponent.vue";

export default {
  name: "app",
  components: {
    MapComponent
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

