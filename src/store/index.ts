import Vue from "vue";
import Vuex from "vuex";
import LoginModule from "./module/Login/LoginModule"; // 引入 auth 模塊

Vue.use(Vuex);

interface State {
  LoginModule: typeof LoginModule.state;
}

type GettersFuncs = typeof LoginModule.getters;

// 提取 mutation 函數類型
type CommitFuncs = typeof LoginModule.mutations;

// dispatch 處理步驟同 commit
type DispatchFuncs = typeof LoginModule.actions;

const store = new Vuex.Store({
  modules: {
    LoginModule, // 將 auth 模塊添加到 Vuex store 中
  },
});

export default store;

const $$store = store;

Vue.prototype.$store = store;

export type ReturnGetters<T extends { [key: string]: (...args: any) => any }> =
  {
    [P in keyof T]: ReturnType<T[P]>;
  };
// 將 getter 轉換成對象
type Getters = ReturnGetters<GettersFuncs>;
// 將 mutation 函數名及 payload 類型轉換成 commit 函數的兩個入參類型
type Commit = <T extends keyof CommitFuncs>(
  type: T,
  payload?: Parameters<CommitFuncs[T]>[1]
) => void;
type Dispatch = <T extends keyof DispatchFuncs>(
  type: T,
  payload?: Parameters<DispatchFuncs[T]>[1]
) => Promise<any>;

export const { state } = store;
export const { getters }: { getters: Getters } = store; // 定義 getters 的類型
export const { commit }: { commit: Commit } = store; // 定義 commit 的類型
export const { dispatch }: { dispatch: Dispatch } = store; // 定義 dispatch 的類型

// 在 Vue 實例化時將 store 加入到 Vue 中
new Vue({
  el: "#app",
  store,
  // 其他配置...
});

export { $$store };

export interface Store {
  state: State;
  getters: Getters;
  commit: Commit;
  dispatch: Dispatch;
}

// import Vue from "vue";
// import Vuex from "vuex";
// import LoginModule from "./module/Login/LoginModule";

// Vue.use(Vuex);

// interface State {
//   LoginModule: typeof LoginModule.state;
// }

// // 提取所有 module 的 getter 函數類型對象
// type GettersFuncs = typeof LoginModule.getters;

// // 提取 mutation 函數類型
// type CommitFuncs = typeof LoginModule.mutations;

// // dispatch 處理步驟同 commit
// type DispatchFuncs = typeof LoginModule.actions;

// const store = new Vuex.Store<State>({
//   modules: {
//     LoginModule,
//   },
// });
// export default store;
