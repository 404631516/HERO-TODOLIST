import { AuthProtocol } from "./authProtocol";
import { Api } from "../Api";
import { AuthRequire, AuthSysBaseResponse, AuthResponseData } from "@/types/AuthType";

export class AuthApi {
  public static login(
    require: AuthRequire,
    onSuccess?: (data: AuthResponseData) => void,
    onFailed?: (res: AuthSysBaseResponse<null>) => void,
    onFinally?: () => void
  ) {
    const request: AuthRequire = {
      email: require.email,
      password: require.password,
    };

    Api.post(
      AuthProtocol.LOGIN,
      request,
      undefined,
      onSuccess,
      onFailed,
      onFinally
    );
  }

  
}
