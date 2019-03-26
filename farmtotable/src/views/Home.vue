<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <button @click="increment">+</button>
     <button @click="decrement">-</button>
     <div>{{ counter }}</div>
     <input type="text" name="produce" placeholder="enter veggies here" v-model="produce_text">
     <button @click="addProduce">Add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      produce_text:""
    }
  },
  components: {
  },
  methods:{
    increment (){
      this.$store.commit('increment');
    },
    decrement (){
      this.$store.commit('decrement');
    },
    addProduce () {
      var p = this.produce_text;
      // console.log(p);
      this.$store.commit('addProduce', {name:p});
    }
  },
  computed: {
    counter (){
      return this.$store.state.counter;
    }
  }
}
</script>
