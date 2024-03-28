import { Protocol } from "../protocol";

export class TodoProtocol {
  public static readonly TEST_DETAIL: string = `${Protocol.TODO_URL}/users`;
  public static readonly GET_USER_BY_ID: string = `${Protocol.TODO_URL}/users`;
}
console.log(`${Protocol.TODO_URL}/users`);
