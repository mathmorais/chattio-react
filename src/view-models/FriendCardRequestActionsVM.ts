import Cookies from "js-cookie";
import { asyncFetch } from "../utils/asyncFetch";

export class FriendCardRequestActionsVM {
  private token = Cookies.get("token");
  private url = process.env.GATSBY_API_URL;
  uid: string;

  constructor(uid: string) {
    this.uid = uid;
  }

  async handleExecuteFriendRequestAction(action: "accept" | "ignore") {
    try {
      await asyncFetch(`${this.url}/friends/${action}`, {
        body: JSON.stringify({
          uid: this.uid,
        }),
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    } catch (err) {
      console.log(err);
    }
  }
}
