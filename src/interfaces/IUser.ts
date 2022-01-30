export interface IUser {
  _id: string;
  fullName: string;
  friendId: string;
  email: string;
  password: string;
  friendRequests: [{ user: string | IUser }];
  friends: [{ user: string | IUser; pending: boolean; roomId: string }];
}
