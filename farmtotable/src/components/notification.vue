<template>
  <div id="notification">
    
    <div v-if="$store.state.searchResults.length > 0">Hello </div>
    
    <div v-else-if="this.$store.state.searchResults.length == 0">No results found. Try changing your distance radius.</div>
    <!-- <b-alert dismissible variant="success"  v-model="showSearchAlert">We have found providers in your area: {{resultMessage}}</b-alert> -->
    <!-- <b-button @click="showAlert=true" variant="success" v-model="nuProduce" class="m-1">Search</b-button> -->
  </div>
</template>

<script>

export default {
  name: "notification",
  // props:{
  //   alert: Boolean
  // },
  data() {
    return {
      // showSearchAlert: alert,

    };
  },
  // watch: {
  //   alert: function (newAlertData) {
  //     this.showSearchAlert = true;
  //   }
  // },
}
</script>