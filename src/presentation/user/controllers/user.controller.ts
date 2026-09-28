import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../application/user/use-cases/create-user.use-case.js';
import { CreateUserRequestDto } from '../dto/create-user.request.dto.js';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  create(@Body() body: CreateUserRequestDto) {
    return this.createUserUseCase.execute({
      name: body.name,
      email: body.email,
    });
  }
}
