<template>
  <div><a :href="getFarmerURL" target="_blank">My Location</a></div>
</template>

<script>
export default {
  name: "MapComponent",
  data (){
    return {
      location_url: "https://www.google.com/maps/dir/?api=1",
      zoom_setting: "16z",
      farmer_location_str: "@38.0355597,-84.4924768",
    }
  },
  computed: {
    getFarmerURL() {
      return this.location_url;
    }
  }
};
</script>

<style>
#map {
  font-size: 30px;
  /* height: 50vh;
  width: 60vw;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgb(173, 30, 30); */
}
</style>