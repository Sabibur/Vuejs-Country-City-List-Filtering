<template>
  <div id="app">
    <filterbox/>
   <filterdetails/>
  </div>
</template>

<script>

import filterbox from "./components/filterbox";
import filterdetails from './components/filterdetails'

import jsdata from "./data.json";

export default {
   components: {
    filterbox,
    filterdetails,
    
    // inventory,
  },
  name: 'App',

  mounted() {
    this.$store.commit("setData", jsdata);
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
