<template>
<!-- generates a link that when clicked calls the computed method that creates a farmer-specific google maps page -->
    <div><a :href="getToFarmerURL" target="_blank">Directions!</a></div>
</template>

<script>
export default {
  name: "MapComponent",
  data (){
    return {
      // part of the google maps url that accounts for the user's location
      start_url: "https://www.google.com/maps/dir/?api=1",

      // part of the url that defines the farmer's location (street address)
      // will be in the format of:
      // streetNumber%20streetName%20streetType%2C%20city%2C%20state(2 letters)
      // (%20 = " " or use +, %2C = comma(,))
      farmer_location_str: "348%20east%20main%20st%2C%20lexington%2C%20ky"
    }
  },
  computed: {
    // concatenates the beginning and end of the url as specified in data, with required attributes
    getToFarmerURL() {
      return this.start_url + "&destination=" + this.farmer_location_str + "&travelmode=driving";
    }
  }
};
</script>

<style>
#map {
  font-size: 30px;
}
</style>