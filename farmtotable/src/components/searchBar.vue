
<template>
  <div>
    <p>Searching for :{{" " + produce}}</p>
 <!-- on enter call submit -->
    <input @keyup.enter="submit" type="text" v-model="nuProduce" placeholder="Produce">

      <div id="notification">
        <b-alert dismissible variant="success" v-model="showAlert">We have found providers in your area!</b-alert>

        <b-button @click="submit" variant="success" class="m-1">Search</b-button>
      </div>
  </div>
</template>

<script>
// imports notification which the search button is contained in
// import notification from "@/components/notification.vue";

export default {
  components: {

  },
  name: "searchBar",

  data() {
    return {
      produce: "",
      nuProduce: "",
      showAlert: false

    };
  },
  methods: {
    // user field is bound to nuProduce and on submit produce set to equal nuProduce
    submit() {
      this.produce = this.nuProduce;
      this.nuProduce = "";
      console.log(this.$store);
      this.$store.dispatch('searchForProduce', {item: this.produce});
    }
  }
};
</script>