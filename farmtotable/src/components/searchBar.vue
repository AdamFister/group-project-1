
<template>
  <div>
    <p>Searching for :{{" " + produce}}</p>

    <input @keyup.enter="submit" type="text" v-model="nuProduce" placeholder="Produce">
  </div>
</template>

<script>
// imports notification which the search button is contained in
import notification from "@/components/notification.vue";

export default {
  components: {
    notification
  },
  name: "searchBar",

  data() {
    return {
      produce: "",
      nuProduce: "",
      currLocation: "",
      location: ""
    };
  },
  methods: {
    submit: function() {
      this.produce = this.nuProduce;
      this.nuProduce = "";
      this.$store.commit("searchForProduce", {
        loc: this.currLocation,
        item: this.produce
      });
    }
  }
};
</script>