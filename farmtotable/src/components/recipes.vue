<template>
  <div id="recipes">
    <div v-show="haveRecipe">
      <div>
        <b-card no-body class="overflow-hidden" style="max-width: 100%;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="title">
                <b-card-text>
                  <ul>
                    <li
                      v-for="ingredient in extendedIngredients"
                      :key="ingredient.name"
                    >{{ingredient.name}}</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
          <p>{{instructions}}</p>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "recipes",
  data() {
    return {
      recipe: {}
    };
  },
  methods: {
    CallRecipes: function() {
      var searchStr = "veggies";
      this.$store.dispatch("getRecipesByRandom", searchStr);
      this.recipe = this.$store.state.recipe;
    }
  },
  mounted: function() {
    this.CallRecipes();
  },

  computed: {
    title() {
      var str = "";
      if(Boolean(this.$store.state.recipe.id)){
        str = this.$store.state.recipe['title'];
        console.log(this.$store.state.recipe['title']);
      }
      return str;
    },
    image() {
      var str = "";
      if(Boolean(this.$store.state.recipe.id)){
        str = this.$store.state.recipe.image;
        console.log(str);
      }
      return str;
    },
    extendedIngredients() {
      
      var ingredients = [];
      if(Boolean(this.$store.state.recipe.id)){
        ingredients = this.$store.state.recipe.extendedIngredients;
        console.log(ingredients);
      }
      return ingredients;
    },
    instructions() {
      var str = "";
      if(Boolean(this.$store.state.recipe.id)){
        str = this.$store.state.recipe.instructions;
        console.log(str);
      }
      return str;
    },
    haveRecipe() {
      return Boolean(this.$store.state.recipe.id);
    }
  }
};
</script>