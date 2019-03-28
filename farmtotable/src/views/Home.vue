<template>
  <div class="home">
    <input
      @keyup.enter="addName"
      type="text"
      name="name"
      placeholder="enter name here"
      v-model="name_text"
    >

    <input
      @keyup.enter="addLocation"
      type="text"
      name="location"
      placeholder="enter location here"
      v-model="location_text"
    >

    <input
      @keyup.enter="addProduce"
      type="text"
      name="produce"
      placeholder="enter produce here"
      v-model="produce_text"
    >

    <div>{{ allFarmers }}</div>
    <!-- <div v-for="item in produce">{{ item }}</div> -->
    <!-- <button @click="createProfile">Create Profile</button> -->
    <button @click="addFarmer">Add Profile</button>
    <button @click="addProduce">Add Produce</button>
    <button @click="evaluateProximity">Proximity</button>

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
  name: "home",
  data() {
    return {
      produce_text: "",
      name_text: "",
      location_text: "",
      produce_text: ""
    };
  },
  components: {
    notification,
    radius
  },
  methods: {
    addProduce() {
      var p = this.produce_text;
      // console.log(p);
      this.$store.commit("addProduce", { produce: { name: p } });
      this.produce_text = "";
    },
    addFarmer() {
      this.$store.dispatch("getFarmerLocation", {
        name: this.name_text,
        location: this.location_text,
        geolocation: [
          0,
          0
        ],
        produce: [{ name: this.produce_text }]
      })
    },
    getProximity() {
      
    }
  },
  computed: {
    allFarmers() {
      return this.$store.state.allFarmers;
    }
  }
};
</script>
