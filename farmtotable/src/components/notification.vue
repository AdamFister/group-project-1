<template>
  <div id="notification">
    <b-alert
      dismissible
      variant="success"
      v-model="showAlert"
    >We have found providers in your area! Click HERE for directions.</b-alert>

    <b-button @click="showAlert=true" variant="success" class="m-1">Search</b-button>
  </div>
</template>

<script>
export default {
  name: "notification",
  data() {
    return {
      showAlert: false
    };
  }
};
</script>