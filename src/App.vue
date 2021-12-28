<template>
  <nnavbar></nnavbar>
  <router-view></router-view>
  <progress-bar></progress-bar>
  <Footer></Footer>
</template>

<script>

import Nnavbar from '@/components/Nnavbar.vue'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'

export default {
  components: { ProgressBar, Footer, Nnavbar }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
