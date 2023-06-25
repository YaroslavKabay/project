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

    async findOne(id) {
        return this.userRepository.findOne({where: {id}});
    }

    async createUser(user: CreateUserDto) {
        return this.userRepository.create(user);
    }

    updateUser(id, updateUserDetails) {
        return this.userRepository.update(updateUserDetails, {
            where: {id},
            returning: true, // This option is used to return the updated user record(s)
        });
    }

    deleteUser(id) {
        return this.userRepository.destroy({where: {id:id}});
    }
}