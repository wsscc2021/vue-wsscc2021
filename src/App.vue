<template>
  <div id="app">
    <Header></Header>
    <div id="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: auto minmax(800px, auto) auto;
}

:root {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>