<template>
  <div id="notification">
    <b-alert dismissible variant="success"  v-model="showSearchAlert">We have found providers in your area: {{resultMessage}}</b-alert>
    <!-- <b-button @click="showAlert=true" variant="success" v-model="nuProduce" class="m-1">Search</b-button> -->
  </div>
</template>

<script>

export default {
  name: "notification",
  props:{
    alert: Boolean
  },
  data() {
    return {
      showSearchAlert: alert,
      resultMessage: ""
    };
  },
  watch: {
    alert: function (newAlertData) {
      this.showSearchAlert = true;
    }
  },
};
</script>