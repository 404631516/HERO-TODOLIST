export interface AuthRequire {
  email: string;
  password: string;
}

export interface AuthSysBaseResponse<T> {
  code: string;
  message: string;
  responseData: Array<T> | T | null;
}

export interface LoginData {
  message: string;
  token: string;
}

export interface AuthResponseData {
  config: any;
  data: LoginData;
  headers: any;
  request: any;
  status: number;
  statusText: string;
}

export interface UserData {
  name: string;
  uid: number;
  email: string;
  role: number;
  isLogin: boolean;
  token: string;
}
