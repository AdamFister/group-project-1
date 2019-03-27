<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
     <button @click="increment">+</button>
     <button @click="decrement">-</button>
     <div>{{ counter }}</div> -->

     <input @keyup.enter="addName" type="text" name="name" placeholder="enter name here" v-model="name_text">

     <input @keyup.enter="addLocation" type="text" name="location" placeholder="enter location here" v-model="location_text">

     <input @keyup.enter="addProduce" type="text" name="produce" placeholder="enter produce here" v-model="produce_text">

     <div>{{ allFarmers }}</div>
     <div v-for="item in produce">{{ item }}</div>
     <!-- <button @click="createProfile">Create Profile</button> -->
     <button @click="addFarmer">Add Profile</button>

    <notification/>
    <radius></radius>
  </div>
</template>

<script>
// @ is an alias to /src
import notification from "@/components/notification.vue";
import { mapActions } from "vuex";
import radius from "../components/radius";

export default {
  name: 'home',
  data () {
    return {
      produce_text:"",
      name_text:"",
      location_text:"",
      produce_text:""
    }
  },
  components: {
    notification,
    radius
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement (){
      this.$store.commit('decrement');
    },
    addProduce () {
      var p = this.produce_text;
      // console.log(p);
      this.$store.commit('addProduce', {produce:p});
      this.produce_text = "";
    },
    // addName () {
    //   var n = this.name_text;
    //   this.$store.commit('addName', {name:n});
    //   this.name_text = "";
    // },
    // addLocation () {
    //   var l = this.location_text;
    //   this.$store.commit('addLocation', {location:l});
    //   this.location_text = "";
    // },
    addFarmer () {
      this.$store.commit('addFarmer', {name:this.name_text, location:this.location_text, produce:[ {name:this.produce_text}]});
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    name (){
      return this.$store.state.farmers.name;
    },
    location (){
      return this.$store.state.farmers.location;
    },
    produce (){
      return this.$store.state.farmers.produce;
    },
    allFarmers (){
      return this.$store.state.allFarmers;
    }

  }
};
</script>
