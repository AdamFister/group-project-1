<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <notification/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import notification from "@/components/notification.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    notification
  }
};
</script>
