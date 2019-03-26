<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <button @click="increment">+</button>
     <button @click="decrement">-</button>
     <div>{{ counter }}</div>
     <div>{{ name }}</div>
     <div>{{ location }}</div>
     <div v-for="item in produce">{{ item }}</div>
     <input @keyup.enter="addName" type="text" name="name" placeholder="enter name here" v-model="name_text">
     <input @keyup.enter="addLocation" type="text" name="location" placeholder="enter location here" v-model="location_text">
     <input @keyup.enter="addProduce" type="text" name="produce" placeholder="enter veggies here" v-model="produce_text">
     <!-- <button @click="addProduce; addName; addLocation">Add</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      produce_text:"",
      name_text:"",
      location_text:"",
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
      this.$store.commit('addProduce', {produce:p});
      this.produce_text = "";
    },
    addName () {
      var n = this.name_text;
      this.$store.commit('addName', {name:n});
      this.name_text = "";
    },
    addLocation () {
      var l = this.location_text;
      this.$store.commit('addLocation', {location:l});
      this.location_text = "";
    }
  },
  computed: {
    counter (){
      return this.$store.state.counter;
    },
    name (){
      return this.$store.state.farmers.name;
    },
    location (){
      return this.$store.state.farmers.location;
    },
    produce (){
      return this.$store.state.farmers.produce;
    }
  }
}
</script>
