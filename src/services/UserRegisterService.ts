import { asyncFetch } from "../utils/asyncFetch";

type UserRegisterServiceDTO = {
  fullName: string;
  email: string;
  password: string;
};

export class UserRegisterService {
  user: UserRegisterServiceDTO;

  constructor(user: UserRegisterServiceDTO) {
    this.user = user;
  }

  async handleRegisterUser(): Promise<string> {
    const apiUrl = process.env.GATSBY_API_URL;

    if (apiUrl) {
      const { token } = await asyncFetch<{ token: string }>(
        `${apiUrl}/api/user/register`,
        {
          body: JSON.stringify(this.user),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return token;
    } else {
      throw new Error("Missing server URL");
    }
  }
}
