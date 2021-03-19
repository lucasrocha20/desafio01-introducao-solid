import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const existsUser = this.usersRepository.findById(user_id);

    if (!existsUser) {
      throw new Error("User not found!");
    }

    if (!existsUser.admin) {
      throw new Error("User not is admin!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
