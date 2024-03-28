import { Api } from "../Api";
import {
  TodoTestRequest,
  TodoTestResponse,
  Response,
  UserResponse,
} from "@/types/TodoType";
import { TodoProtocol } from "./todoProtocol";
import axios from "axios";

export class TestApi {
  public static getTest(
    request?: TodoTestRequest,
    onSuccess?: (data: TodoTestResponse) => void,
    onFailed?: (res: Response<null>) => void,
    onFinally?: () => void
  ) {
    Api.get(
      TodoProtocol.TEST_DETAIL,
      //   " http://10.1.2.101:8080/users",
      { data: request },
      onSuccess,
      onFailed,
      onFinally
    );
  }

  public static getUserById(
    id?: TodoTestRequest,
    onSuccess?: (data: UserResponse) => void,
    onFailed?: (res: Response<null>) => void,
    onFinally?: () => void
  ) {
    Api.get(
      TodoProtocol.GET_USER_BY_ID + `/${id}`,
      //   " http://10.1.2.101:8080/users",
      {},
      onSuccess,
      onFailed,
      onFinally
    );
  }

  // public static getUserById(id: number) {
  //   return axios.get(TodoProtocol.GET_USER_BY_ID + `/${id}`).then((res) => {
  //     return res.data;
  //   });
  // }
}
