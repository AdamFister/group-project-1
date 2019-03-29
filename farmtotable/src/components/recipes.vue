<template>
  <div id="recipes">
    <div v-show="haveRecipe">
      <div>
        <b-card no-body class="overflow-hidden mx-auto" style="max-width:75%;" id="card">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="image" class="rounded-0" style="max-width:100%; max-height:75%;"></b-card-img>
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
<style> 



#card{
  padding:50px;
  padding-top:-10px;
  margin:50px;
  color:black;
  background-color:rgba(94, 109, 41, 0.74);
}
</style>