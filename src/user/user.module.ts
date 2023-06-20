import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {UserController} from "./user.controller";
import {SequelizeModule} from "@nestjs/sequelize";

import {User} from "./user.model";

@Module({
  imports: [SequelizeModule.forFeature([User])], //  будем використовувати табличку юзер
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}