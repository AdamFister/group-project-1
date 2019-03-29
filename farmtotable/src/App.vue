<template>
  <div id="app">
    <header id="header">
      <img id="logo" src="../photo/23535625-d2e8-4511-bddd-dc9f67c5933c.png"> 
    </header>
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
  color: ;
  margin-top: 60px;
}

#header{ 
background-image:url("../photo/pale-green-dots-whiteback.jpg");
margin:25px;
color:red;

}

#logo{
  height:70%;
}
</style>

