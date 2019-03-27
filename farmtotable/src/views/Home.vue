<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <notification/>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <div>{{ counter }}</div>
    <searchBar></searchBar>
    <radius></radius>
  </div>
</template>

<script>
// @ is an alias to /src
import notification from "@/components/notification.vue";
import { mapActions } from "vuex";
import radius from "../components/radius";
import searchBar from "../components/searchBar";

export default {
  name: "home",
  components: {
    notification,
    radius,
    searchBar,
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }

  }
};
</script>
