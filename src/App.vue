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

* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a, p, span, input {
  font-size: 13px;
}

input {
  text-align: left;
}

:root {
  --error-color: rgba(242, 54, 72, 1);
  --success-color: rgba(33, 166, 122, 1);
  --progress-color: rgba(0, 125, 171, 1);
  --box-color: rgba(0, 33, 69, 1);
  --box-hover-color: rgba(0, 75, 118,  1);
}
</style>