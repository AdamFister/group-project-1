
<template>
  <div>
    <p>Searching for :{{" " + produce}}</p>
    <p> Current location:{{" " + location}}</p>
    <input @keyup.enter="submit" type="text" v-model="nuProduce" placeholder="Produce">
    <input @keyup.enter="submitLoc" type="text" v-model="currLocation" placeholder="Address">
     </div>
</template>

<script>
export default {
  name: "searchBar",
  
  data() {
    return {
      produce: "",
      nuProduce: "",
      currLocation: "",
      location: "",
    };
  },
  methods: {
    submit: function() {
      this.produce = this.nuProduce;
      this.nuProduce = '';
    },
  submitLoc: function() {
      this.location = this.currLocation;
      this.currLocation = "";


  }
  },


};
</script>