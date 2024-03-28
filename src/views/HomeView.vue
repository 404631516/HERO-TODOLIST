<template>
  <div class="home">
    <nav>
      <router-link to="/">login page</router-link> |
      <router-link to="/register">register page</router-link>
    </nav>
    <img alt="Vue logo" src="../assets/rabbit.png" />
    <HelloWorld msg="歡迎來到因雄崛起，請先登入您的帳號" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
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
