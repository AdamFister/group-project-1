<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <notification></notification>
    <radius></radius>
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
    radius
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
