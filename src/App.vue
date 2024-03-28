<template>
  <div id="app">
    <router-view class="content" />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(assets/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 100px;
  margin: -5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: gray;

    &.router-link-exact-active {
      color: yellow;
    }
  }
}
</style>
