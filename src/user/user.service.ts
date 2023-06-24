import { Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";

@Injectable()
export class UserService {

    constructor(@InjectModel(User) private userRepository: typeof User) { //userRepsotiry : типу назва таблички по якій шукаєм юзерів
    }

    async getAll  () {
        return this.userRepository.findAll();
    }

    async createUser(user: CreateUserDto) {
        return this.userRepository.create(user);
    }

    async findOne(id) {
        console.log(id);
        return this.userRepository.findOne({where: {id: id}});
    }

}