import { Module } from '@nestjs/common';
import { UserController } from '../presentation/user/controllers/user.controller.js';
import { CreateUserUseCase } from '../application/user/use-cases/create-user.use-case.js';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase],
})
export class UserModule {}
