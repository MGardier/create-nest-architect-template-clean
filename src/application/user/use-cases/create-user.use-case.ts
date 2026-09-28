import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/user/repositories/user.repository.js';
import { CreateUserInputDto } from '../dto/create-user.input.js';
import { CreateUserOutputDto } from '../dto/create-user.output.js';
import { UserOutputMapper } from '../mapper/user-output.mapper.js';
import { User } from '../../../domain/user/entities/user.entity.js';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: CreateUserInputDto): Promise<CreateUserOutputDto> {
    const user = new User(data.name, data.email);

    const createdUser = await this.userRepository.create(user);

    return UserOutputMapper.toCreateOutputDto(createdUser);
  }
}
