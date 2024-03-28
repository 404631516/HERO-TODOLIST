<template>
  <div class="TodoView">
    <div class="backHome">
      <img class="AN" alt="Vue logo" src="../assets/AN.png" />
      <router-link to="/">回首頁</router-link>
    </div>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

@Component({
  components: {
    HelloWorld,
    TodoList,
  },
})
export default class TodoView extends Vue {}
</script>

<style lang="scss" scoped>
.TodoView {
  display: flex;
  flex-direction: column;
  //   align-items: center;
  background: white;
  width: 100%;
  height: 100%;
}
.AN {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
}
.backHome {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #42b983;
  font-size: 20px;
  margin: 20px;
}
</style>
```
