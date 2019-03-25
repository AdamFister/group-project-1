<template>
  <div id="notification">
    <b-alert
      dismissible
      v-model="showAlert"
    >We have found providers in your area! Click HERE for directions.</b-alert>

    <b-button @click="showAlert=true" variant="info" class="m-1">Submit</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAlert: false
    };
  },
  name: "notification",
  methods: {}
};
</script>