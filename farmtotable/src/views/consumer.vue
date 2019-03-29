<template>
  <div class="consumer">
    <h1>This is the consumer page</h1>
    <searchBar></searchBar>
    <div>{{ searchResults }}</div>
    <notification/>
<radius></radius>
  </div>
</template>
<script>
import radius from "../components/radius";
// import MapComponent from "../components/MapComponent";
import searchBar from "../components/searchBar";
import notification from "@/components/notification.vue";

export default {
  name: "consumer",
  components: {
    searchBar,
    notification,
    radius
  },
  computed: {
      searchResults() {
      return this.$store.state.searchResults;
    }
  }
};
</script>