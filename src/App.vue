<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>
<style src="./assets/styles/buefy.css"></style>
<!--<link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">-->
<style src="./assets/styles/mystyle.css"></style>
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
