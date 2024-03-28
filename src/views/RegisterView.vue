<template>
  <div>
    <nav>
      <router-link to="/">login page</router-link> |
      <router-link to="/register">register page</router-link>
    </nav>
    <div class="register">
      <h1>註冊頁面</h1>
      <el-input v-model="input" placeholder="请输入帳號"></el-input>
      <el-input v-model="input" placeholder="请输入密碼"></el-input>
      <div>
        <div class="account">註冊帳號：</div>
        <input placeholder="請輸入帳號" class="accountInput" />
        <div class="password">註冊密碼：</div>
        <input placeholder="請輸入密碼" class="passwordInput" />
      </div>
      <div>
        <button
          type="submit"
          class="registerButton"
          @click.prevent="handlerRegister"
        >
          註冊
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import router from "@/router";

@Component({

})
export default class AboutView extends Vue {
  @Prop() private msg!: string;
  private handlerRegister() {
    //此處做註冊處理
    //register.api(userName,password)
    alert("註冊成功！");
    router.push("/");
  }
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #42b983;
  width: 500px;
}
h1 {
  display: flex;
  color: yellow;
}
.account {
  display: flex;
  margin: 20px;
}
.password {
  display: flex;
  margin: 20px;
}
.accountInput {
  display: flex;
  border-radius: 10px;
}
.passwordInput {
  display: flex;
  border-radius: 10px;
}
.registerButton {
  display: flex;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
  background-color: #42b983;
  color: white;
  font-size: 16px;
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
