import { IUser } from "./IUser";

export interface IFriend {
  user: IUser;
  pending: boolean;
}
