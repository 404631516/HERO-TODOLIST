import { ReturnGetters, ActionContext } from "@/types/store";
import { AuthRequire, UserData } from "@/types/AuthType";
import { AuthApi } from "@/api/auth/authApi";

const state = {
  token: localStorage.getItem("UserToken") || null,
};

interface LoginState {
  /** 使用者資訊 */
  userInfo: UserData;
}
const moduleGetters = {
  /** 使用者ID
   * @param state
   */
  userUid(state: LoginState): number {
    return state.userInfo?.uid ?? -1;
  },

  /** 使用者名稱
   * @param state
   */
  userName(state: LoginState): string {
    return state.userInfo?.name ?? "";
  },

  /** 是否有登入
   * @param state
   */
  isLogin(state: LoginState): boolean {
    return state.userInfo.uid > 0;
  },
};
type Getters = ReturnGetters<typeof moduleGetters>;

const mutations = {
  /** 設定個人資訊
   * @param state
   * @param userInfo
   */
  setUserInfo(state: LoginState, userInfo: UserData) {
    state.userInfo = userInfo;
  },

  setToken(state: any, token: any) {
    state.token = token;
    localStorage.setItem("UserToken", token);
  },
  clearToken(state: any) {
    state.token = null;
    localStorage.removeItem("UserToken");
  },
};

const actions = {
  // 可能還有其他 action，例如登出等
  /** 一般登入
   * @param context
   * @param data
   */
  async login(
    context: ActionContext<LoginState, Getters>,
    loginInfo: AuthRequire
  ): Promise<void> {
    // 組成封包
    const data = {
      email: loginInfo.email,
      password: loginInfo.password,
      //   device: LoginType.device,
      //   origin: "33",
      //   qRCode: "",
      //   appId: AppIdType.AdlEdu_VSP_Student,
      //   deviceModel: `${handleDeviceStr(navigator.userAgent)}`,
    };

    console.log("登入資訊", data);

    // API 一般登入
    const response: any = AuthApi.login(
      data,
      (data) => {
        // 檢查返回的數據是否存在並且不為空
        if (data.data && data.data.token) {
          localStorage.setItem("UserToken", JSON.stringify(data.data.token));
        } else {
          console.error("未收到有效的用戶數據");
        }
      },
      (error) => {
        console.log("大失敗", error);
        alert("登入失敗");
      },
      () => {
        console.log("請求完成");
      }
    );
    // if (response.result !== "success") {
    //   console.log(response.result, response.resMessage);
    // }

    console.log("登入回應", response);
    if (response) {
      console.log("回應成功", response);
    }

    // 登入成功, 儲存個人資訊
    // await context.dispatch("onLogin", JSON.parse(response));
  },

  /** 登入成功
   * @param context
   * @param userInfo
   */
  async onLogin(
    context: ActionContext<LoginState, Getters>,
    userInfo: UserData
  ): Promise<void> {
    // 儲存個人資料
    context.commit("setUserInfo", userInfo);

    // 儲存個人資料到localStorage
    localStorage.setItem(`{UserInfo}`, JSON.stringify(userInfo));

    // // 處理GA獲取UserId
    // router.app.$gtag.set({ user_id: userInfo.uid });

    // // 移除因材網轉轉跳登入Cookie
    // router.app.$cookie.remove(`${CookieStr.AdlGame}`);
  },
};

const getters = {
  getToken: (state: any) => state.token,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
