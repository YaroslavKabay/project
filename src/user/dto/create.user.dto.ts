import {IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Min} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({
        example: 'Taras',
        required: true
    })
    @IsString()
    @IsOptional()
    firstName: string;


    @ApiProperty({
        example: 'Kvas',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @Length(2)
    surName: string;

    @ApiProperty({
        example: 'taras@email.com',
        required: true
    })
    @IsString()
    @IsEmail()
    email: string;


    @ApiProperty({
        example: 20,
        required: true
    })
    @IsNumber()
    @Min(16)
    age: number;



    @ApiProperty({
        example: 'Lviv',
        required: true
    })
    @IsString()
    city: string;

    @ApiProperty({
        example: false,
        required: true
    })
    @IsBoolean()
    isConfirmed: boolean;

}