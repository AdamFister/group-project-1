<template>
  <div class="consumer">
    <h1></h1>
    <searchBar></searchBar>
    <div>{{ searchResults }}</div>
    <notification/>
<radius></radius>
    <recipes/>
  </div>
</template>
<script>
import radius from "../components/radius";
// import MapComponent from "../components/MapComponent";
import searchBar from "../components/searchBar";
import notification from "@/components/notification.vue";
import recipes from "../components/recipes.vue";

export default {
  name: "consumer",
  components: {
    searchBar,
    notification,
    radius,
    recipes
  },
  computed: {
      searchResults() {
      return this.$store.state.searchResults;
    }
  }
};
</script>