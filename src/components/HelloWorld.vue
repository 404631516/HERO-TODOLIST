<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>玩家帳號</h3>
    <ul>
      <input
        placeholder="請輸入帳號"
        class="accountInput"
        type="text"
        id="title"
        required
        v-model="email"
        name="title"
      />
    </ul>
    <h3>玩家密碼</h3>
    <ul>
      <input
        placeholder="請輸入密碼"
        class="passwordInput"
        type="text"
        id="title"
        required
        v-model="password"
        name="title"
      />
    </ul>
    <ul>
      <button type="submit" class="loginButton" @click="onNormalLogin">
        登入
      </button>
    </ul>
    <div class="about"><a href="https://adl.edu.tw/hero/">#關於我們#</a></div>
  </div>
</template>

<script lang="ts" scoped>
import router from "@/router";
import { Component, Prop, Vue } from "vue-property-decorator";
import { AuthApi } from "@/api/auth/authApi";
import { AuthRequire } from "@/types/AuthType";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private handlerChangePassword() {
    //此處做登入處理
    //login.api(userName,password)
    alert("登入成功！");
    router.push("/todoPage");
  }
  private token: string | undefined;
  /** 帳號 */
  private email: string = "";
  /** 密碼 */
  private password: string = "";

  /** 一般登入 */
  private async onNormalLogin(): Promise<void> {
    // 防呆
    if (this.email === "" || this.password === "") {
      alert("帳號密碼不能為空");
      return;
    }

    // 一般登入資訊
    const loginInfo: AuthRequire = {
      email: this.email,
      password: this.password,
    };

    try {
      // API 一般登入
      await this.$$store.dispatch("login", loginInfo);
      this.token = localStorage.getItem("UserToken") ?? undefined;

      console.log("token", this.token);

      if (this.token) {
        router.push("/todoPage");
      }
      // 介面刷新
      // location.reload();
    } catch (e) {
      console.log(`${e}`, e);
      return;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
h4 {
  margin: 20px 0 0;
  font-size: 12px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: yellow;
  font-size: 14px;
}
.accountInput {
  border-radius: 10px;
  padding: 10px;
}
.passwordInput {
  border-radius: 10px;
  padding: 10px;
}
.loginButton {
  border-radius: 10px;
  padding: 10px;
  background-color: #42b983;
  color: white;
  font-size: 16px;
}
.hello {
  background: #42b983;
  height: 60%;
  padding: 20px;
  padding-left: 100px;
  padding-right: 100px;
}
.about {
  padding: 20px;
  font-size: 12px;
  color: yellow;
  text-align: center;
}
</style>
