<template>
  <div class="consumer">
    <h1></h1>
    <p>Searching for :{{" " + produce}}</p>

    <input @keyup.enter="submit" type="text" v-model="nuProduce" placeholder="Produce">

      <div id="notification">
        <b-alert dismissible variant="success" v-model="showAlert">We have found providers in your area!</b-alert>

        <b-button @click="submit" variant="success" class="m-1">Search</b-button>
      </div>
    <div>{{ searchResults}}</div>
    <notification v-bind:show="showAlert"/>
<radius></radius>
    <recipes/>
  </div>
</template>
<script>
import { mapState } from "vuex";
import radius from "../components/radius";
// import MapComponent from "../components/MapComponent";
// import searchBar from "../components/searchBar";
import notification from "@/components/notification.vue";
import recipes from "../components/recipes.vue";

export default {
  name: "consumer",
  components: {
    // searchBar,
    notification,
    radius,
    recipes
  },
  data() {
    return {
      produce: "",
      nuProduce: "",
      showAlert: false
    };
  },
  computed: {
      searchResults() {
      return this.$store.state.searchResults;
    },
  },
  methods: {
    submit() {
      this.produce = this.nuProduce;
      this.nuProduce = "";
      var obj = {item: this.produce};
      this.$store.dispatch("searchForProduce", obj)
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