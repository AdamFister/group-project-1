<template>
  <div class="about">
    <radius/>
     <notification/>
     <recipes/>
     
  </div>
</template>

<script>
import { mapActions } from "vuex";

import notification from "@/components/notification.vue";
import radius from "../components/radius.vue";
import recipes from "../components/recipes.vue";



export default {
  name: 'about',
  components: {
    notification,
    radius,
    recipes
  }
}







</script>