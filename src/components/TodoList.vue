<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>教師派獎清單</h3>
    <ul>
      待辦事項：
    </ul>
    <div class="list-info">
      <p>Completed Tasks:</p>
      <p>Pending Tasks:</p>
    </div>

    <div class="col-md-6">
      <button type="submit" class="loginButton" @click.prevent="testGet">
        取得帳戶資訊
      </button>
      <div>
        <div class="form-group">
          <label for="title">accountId</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="accountId"
            name="title"
          />
        </div>

        <button @click="searchUser(accountId)" class="btn btn-success">
          查詢帳戶
        </button>
      </div>
    </div>

    <div v-if="userData" class="GetUser">
      <h3>使用者(User List Data)</h3>
      <ul class="user-list-container">
        <li v-for="(value, key) in userData" :key="key" class="UserItem">
          {{ key }}：{{ value }}
        </li>
      </ul>
    </div>

    <div v-if="localStorageData" class="UserList">
      <h3>使用者清單(User List Data)</h3>
      <ul class="user-list-container">
        <li
          v-for="(value, key) in localStorageData"
          :key="key"
          class="UserItem"
        >
          {{ value.id }}：{{ value.username }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TutorialDataService from "@/services/TutorialDataService";
import Tutorial from "@/types/Tutorial";
import AddTutorial from "@/components/AddTutorial.vue";
import { TestApi } from "@/api/todo/todoApi";
import { TodoTestRequest } from "@/types/TodoType";

@Component({
  components: {
    AddTutorial,
  },
})
export default class TodoList extends Vue {
  @Prop() private msg!: string;

  private tutorials: Tutorial[] = [];
  private currentTutorial = {} as Tutorial;
  private currentIndex: number = -1;
  private title: string = "";
  private isInit: boolean = false;
  private userData: any = {};

  get localStorageData() {
    const getUserData = localStorage.getItem("GetUser");
    if (getUserData) {
      const parseData = JSON.parse(getUserData);
      return parseData;
    }
  }

  // UserData() {
  //   const getUserById = localStorage.getItem("GetUserById");
  //   console.log("getUserById", getUserById);
  //   if (getUserById) {
  //     const parseData = JSON.parse(getUserById);
  //     // 确保对象的属性是响应式的
  //     return parseData;
  //   }
  // }

  searchUser(accountId: TodoTestRequest) {
    TestApi.getUserById(
      accountId,
      (data) => {
        // 檢查返回的數據是否存在並且不為空
        if (data && data.data) {
          localStorage.setItem("GetUserById", JSON.stringify(data.data));
          this.userData = data.data;
          // 更新資料模型
        } else {
          console.error("未收到有效的用戶數據");
        }
      },
      (error) => {
        console.error("發生錯誤：", error);
      },
      () => {
        console.log("請求完成");
      }
    );
  }

  testGet() {
    TestApi.getTest(
      {},
      (data) => {
        // 检查返回的数据是否存在并且不为空
        if (data && data.data) {
          localStorage.setItem("GetUser", JSON.stringify(data.data));
          // 更新页面数据
          this.$forceUpdate();
        } else {
          console.error("未收到有效的用户数据");
        }
      },
      (error) => {
        console.error("发生错误：", error);
      },
      () => {
        console.log("请求完成");
      }
    );
  }
  created() {
    this.isInit = true;
    console.log("GETDATA", localStorage.getItem("GetUser"));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
.UserItem {
  display: flex;
  justify-content: center;
}
.UserList {
  margin-top: 20px;
}
.user-list-container {
  max-height: 170px; /* 设置最大高度 */
  overflow-y: auto; /* 当内容超出容器高度时显示垂直滚动条 */
}
</style>
