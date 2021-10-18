<template>
  <div id="header">
    <div id="logo-box">
      <img src="../assets/worldskills-logo.png" alt="logo">
    </div>
    <div id="navigation-box">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
    <div id="account-box">
      <a href="/account/login">Login</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin a-link {
  display: inline-block;
  vertical-align: middle;
  // width: 70px;
  // height: 35px;
  line-height: 40px;
}

#header {
  display: grid;
  grid-template-columns: 80px auto 80px;
  justify-items: left;
  align-items: center;
  position: sticky;
  top: 0px;
  width: 100%;
  max-width: 1000px;
  height: 55px;
  max-height: 55px;
  padding-top: 5px;
  margin: auto;
  border-bottom: 1px solid rgba(235, 235, 235, 1);
  background-color: rgba(255, 255, 255, 1); // 겹쳐졌을 흰색 배경으로 덮어씁니다.
  z-index: 1000; // 겹쳐졌을 때 가장 위로 오게 합니다.

  #navigation-box {
    text-align: center;
    a {
      @include a-link;
      height: 43px;
      margin-left: 20px;
      margin-right: 20px;
      border: none;
      box-sizing: border-box;
      background-color: rgba(255, 255, 255, 1);
      font-size: 15px;
      // color: rgba(0, 0, 0, 1);
      &:link {
        color: rgba(0, 0, 0, 1);
        text-decoration: none;
      }
      &:visited {
        color: rgba(0, 0, 0, 1);
        text-decoration: none;
      }
      &.router-link-exact-active {
        color: rgba(0, 0, 0, 1);
        border-bottom: 3px solid var(--box-color);
      }
    }
  }

  #account-box {
    a {
      @include a-link;
      width: 70px;
      height: 40px;
      border: none;
      border-radius: 5px;
      background-color: var(--box-color);
      color: rgba(242, 242, 242, 1);
      &:hover {
        background-color: var(--box-hover-color);
        text-decoration: none;
      }
      &:link {
        color: rgba(242, 242, 242, 1);
        text-decoration: none;
      }
      &:visited {
        color: rgba(242, 242, 242, 1);
        text-decoration: none;
      }
    }
  }
}
</style>