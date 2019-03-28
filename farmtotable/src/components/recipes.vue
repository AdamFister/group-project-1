<template>
  <div id="recipes">

    
  </div>
</template>

<script>
export default {
  name: "recipes",
  methods: {
    CallRecipes: function() {
      var searchStr = "veggies";
      this.$store.dispatch("getRecipesByRandom", searchStr);
    }
  },
  mounted: function(){
    this.CallRecipes()
  }
};
</script>