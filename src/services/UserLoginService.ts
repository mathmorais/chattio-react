import { UserLoginRepository } from "../../infra/repositories/UserLoginRepository";
import { IService } from "../../core/interfaces/IService";

export class UserLoginService implements IService<UserLoginRepository> {
  repository: UserLoginRepository;

  constructor(repository: UserLoginRepository) {
    this.repository = repository;
  }

  handleCallRepository = (): void => {
    window.localStorage.setItem("token", this.repository.handleUserLogin());
  };
}
