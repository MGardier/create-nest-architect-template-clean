import { User } from '../../../domain/user/entities/user.entity.js';
import { CreateUserOutputDto } from '../dto/create-user.output.js';

export class UserOutputMapper {
  static toCreateOutputDto(user: User): CreateUserOutputDto {
    return { email: user.email, name: user.name };
  }
}
