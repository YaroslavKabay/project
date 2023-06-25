import {IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Min} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto {

    @ApiProperty({
        example: 'Taras',
        required: false
    })
    @IsString()
    @IsOptional()
    firstName: string;


    @ApiProperty({
        example: 'Kvas',
        required: false
    })
    @IsString()
    @IsNotEmpty()
    @Length(2)
    @IsOptional()
    surName: string;

    @ApiProperty({
        example: 'taras@email.com',
        required: false
    })
    @IsString()
    @IsEmail()
    @IsOptional()
    email: string;


    @ApiProperty({
        example: 20,
        required: false
    })
    @IsNumber()
    @Min(18)
    @IsOptional()
    age: number;

    @ApiProperty({
        example: 'Lviv',
        required: false
    })
    @IsString()
    @IsOptional()
    city: string;

    @ApiProperty({
        example: 'Bandery 21',
        required: false
    })
    @IsString()
    @IsOptional()
    address: string;

}