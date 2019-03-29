<template>
  <div class="home">
<!-- @keyup.enter="addFarmer" -->
    <input
      
      type="text"
      name="name"
      placeholder="enter name here"
      v-model="name_text"
    >

    <input
      
      type="text"
      name="location"
      placeholder="enter location here"
      v-model="location_text"
    >

    <input
      
      type="text"
      name="produce"
      placeholder="enter produce here"
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
    
    
  </div>
</template>

<script>
// @ is an alias to /src

// import { mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {
      produce_text: "",
      name_text: "",
      location_text: "",
      geolocationarray: []
    };
  },
  components: {
    
    
  },
  methods: {

    addProduce() {
      var p = this.produce_text;
      // console.log(p);
      this.$store.commit("addProduce", {produce: {name: p}});
      this.produce_text = "";
    },
    
    addFarmer() {
      // this.location_text
      //api call here
      //update some variable geoloc
      this.$store.commit("addFarmer", {
        name: this.name_text,
        location: this.location_text,
        geolocation: [Math.floor(Math.random()*100),Math.floor(Math.random()*100)],
        // geolocation: this.geolocationarray,
        produce: [{ name: this.produce_text }]
      });
    }
  },
  computed: {
    allFarmers() {
      return this.$store.state.allFarmers;
    }
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
