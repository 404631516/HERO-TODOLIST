import axios, { AxiosRequestConfig } from "axios";

export class Api {
  private static requestCount = 0;
  private static responseCount = 0;

  public static get(
    url: string,
    config?: AxiosRequestConfig,
    onSuccess?: (responseData: any) => void,
    onFailed?: (res: any) => void,
    onFinally?: () => void
  ) {
    this.onCall();
    axios
      .get<any>(url, config)
      .then((responseData: any) => {
        onSuccess && onSuccess(responseData);
      })
      .catch((error) => {
        onFailed && onFailed(error.response?.data);
      })
      .finally(() => {
        this.onFinally();
        onFinally && onFinally();
      });
  }

  public static post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    onSuccess?: (responseData: any) => void,
    onFailed?: (res: any) => void,
    onFinally?: () => void
  ) {
    this.onCall();
    axios
      .post<any>(url, data, config)
      .then((responseData: any) => {
        onSuccess && onSuccess(responseData);
      })
      .catch((error) => {
        onFailed && onFailed(error.response?.data);
      })
      .finally(() => {
        this.onFinally();
        onFinally && onFinally();
      });
  }

  public static put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    onSuccess?: (responseData: any) => void,
    onFailed?: (res: any) => void,
    onFinally?: () => void
  ) {
    this.onCall();
    axios
      .put<any>(url, data, config)
      .then((responseData: any) => {
        onSuccess && onSuccess(responseData);
      })
      .catch((error) => {
        onFailed && onFailed(error.response?.data);
      })
      .finally(() => {
        this.onFinally();
        onFinally && onFinally();
      });
  }

  public static delete(
    url: string,
    config?: AxiosRequestConfig,
    onSuccess?: (responseData: any) => void,
    onFailed?: (res: any) => void,
    onFinally?: () => void
  ) {
    this.onCall();
    axios
      .delete<any>(url, config)
      .then((responseData: any) => {
        onSuccess && onSuccess(responseData);
      })
      .catch((error) => {
        onFailed && onFailed(error.response?.data);
      })
      .finally(() => {
        this.onFinally();
        onFinally && onFinally();
      });
  }

  public static patch(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    onSuccess?: (responseData: any) => void,
    onFailed?: (res: any) => void,
    onFinally?: () => void
  ) {
    this.onCall();

    axios
      .patch<any>(url, data, config)
      .then((responseData: any) => {
        onSuccess && onSuccess(responseData);
      })
      .catch((error) => {
        onFailed && onFailed(error.response?.data);
      })
      .finally(() => {
        this.onFinally();
        onFinally && onFinally();
      });
  }

  private static onCall() {
    this.requestCount++;
  }

  private static onFinally() {
    this.responseCount++;
    if (this.isLoaded()) {
      this.requestCount = 0;
      this.responseCount = 0;
    }
  }

  private static isLoaded() {
    return this.requestCount === this.responseCount;
  }
}
