import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {ApiBadRequestResponse, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";

import {CreateUserDto} from "./dto/create.user.dto";
import {UserService} from "./user.service";
import {User} from "./user.model";

@ApiTags('Users')
@Controller('users')// name of controller, direction
export class UserController {

    constructor(private readonly userService: UserService) {
    } // connects service to controller

    @Get()// decorator(could be post & else
    getAllUsers(){
        return this.userService.getAll()
    }

    @ApiBadRequestResponse({status: 400, type: 'Wrong body'}) //??? please make it correct
    @ApiResponse({status: 201, type: User,})
    @Post()
    createUser(@Body() createUserDto: CreateUserDto){ //dto (just naming, data transfer obj)баді яке приходить з фронта
        return this.userService.createUser(createUserDto)
    }

    @ApiQuery({name: 'id', example: '111142dsf34243as2', type: String})//swagger
    @Get('/:id')
    getOneUserByID(@Param('id') id:string){
        // return `get by id ${id}`
        return this.userService.findOne(id);
    }

    @Put()
    updateUser(){
        return 'update by id'
    }
}