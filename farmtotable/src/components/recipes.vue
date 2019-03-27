<template>
  <div id="recipes"></div>
</template>

<script>
export default {
  name: "recipes",

  mounted: function() {
    var unirest = require("unirest");
    unirest
      .get(
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1"
      )
      .header(
        "X-RapidAPI-Key",
        "a585a9b005msh459bd2f7657ed56p17e34bjsn1f0dd44c7986"
      )
      .end(function(result) {
        console.log(result.status, result.headers, result.body);
      });
  }
};
</script>