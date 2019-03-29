<template>
  <div class="home">

    <input
      
      type="text"
      name="name"
      placeholder="Name"
      v-model="name_text"
    >

    <input
      
      type="text"
      name="location"
      placeholder="Address, City, State"
      v-model="location_text"
    >

    <input
      
      type="text"
      name="produce"
      placeholder="Produce"
      v-model="produce_text"
    >

    <div>{{ allFarmers }}</div>
    <!-- <p>Name: {{ name }}</p>
    <p>Location: {{ location }}</p>
    <p>Produce: {{ produce }}</p> -->

    <!-- <div v-for="item in produce">{{ item }}</div> -->
    <!-- <button @click="createProfile">Create Profile</button> -->
    <button @click="addFarmer">Add Profile</button>
    <button @click="addProduce">Add Produce</button>

    <button @click="getProximity">Proximity</button>

    <!-- <notification/> -->
    <!-- <radius/> -->

  </div>
</template>

<script>
// @ is an alias to /src


// import { mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {
      name_text: "",
      location_text: "",
      produce_text: "",
      geolocationarray: []
    };
  },
  components: {    
  },
  methods: {
    addProduce() {
      var p = this.produce_text;
      // console.log(p);
      this.$store.commit("addProduce", { produce: { name: p } });
      this.produce_text = "";
    },
    
    addFarmer() {

      // this.$store.dispatch("getFarmerLocation", {
      //   name: this.name_text,
      //   location: this.location_text,
      //   geolocation: [],


      this.$store.dispatch("addFarmerHandler", {
        name: this.name_text,
        location: this.location_text,
        geoLocation: {lat:0,lng:0},
        produce: [{ name: this.produce_text }]
      })
    },
    getProximity() {
      for(var i = 0; i < this.$store.state.allFarmers.length; i++){
        var farmerObj = this.$store.state.allFarmers[i];
        var promiseDistance = this.$store.dispatch("evaluateProximity", farmerObj);
        promiseDistance.then(function(value) {
          console.log(value);
          if(value < 10){
            console.log("add this farmer");
          }
        }); 
      }      
    }
  },
  computed: {
    allFarmers() {
      return this.$store.state.allFarmers;
    }
  },
  mounted: function (){
    this.$store.dispatch("getUserLocation")

    // name() {
    //   return this.$store.state.allFarmers.name;
    // },
    // location() {
    //   return this.$store.state.allFarmers.location;
    // },
    // produce() {
    //   return this.$store.state.allFarmers.produce;
    // }

  }
};
</script>
