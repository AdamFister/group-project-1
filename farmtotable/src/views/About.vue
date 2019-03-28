<template>
  <div class="about">
    <h1>This is the consumer page</h1>
    <searchBar></searchBar>
    <notification/>
  </div>
</template>
<script>

import searchBar from "../components/searchBar";
import notification from "@/components/notification.vue";

export default {
  name: "about",
  components: {
    searchBar,
    notification,
  }
};
</script>