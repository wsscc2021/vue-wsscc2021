<template>
  <Header></Header>
  <div id="main">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: auto minmax(800px, auto) auto;
}

:root {
  --error-color: #f23648;
  --success-color: #21a67a;
  --box-color: rgba(0, 33, 69, 1);
  --box-hover-color: rgba(0, 75, 118,  1);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>