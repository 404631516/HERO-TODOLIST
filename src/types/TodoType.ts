export interface TodoTestRequest {
  id?: number;
}

export interface TodoTestData {
  id: number;
  title: string;
  email: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoTestResponse {
  config: any;
  data: Array<TodoTestData>;
  header: any;
  request: any;
  status: number;
  statusText: string;
}

export interface Response<T> {
  code: string;
  message: string;
  data: Array<T> | T | null;
}

export interface UserData {
  id: number;
  email: string;
  password: string;
  removed: boolean;
  role: number;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {
  config: any;
  data: Array<UserData>;
  header: any;
  request: any;
  status: number;
  statusText: string;
}
