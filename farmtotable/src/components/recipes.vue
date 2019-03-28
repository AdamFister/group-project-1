<template>
  <div id="recipes">
    <button @click="CallRecipes">Call Recipes</button>
  </div>
</template>

<script>
export default {
  name: "recipes",
  methods: {
    CallRecipes: function (){
      var searchStr = "veggies";
      this.$store.dispatch("getRecipesByRandom", searchStr);
    }
  }
};
</script>