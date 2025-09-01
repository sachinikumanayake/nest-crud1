import { IsString, IsEmail,  IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  
  @IsNumber()
  age: number;

  
  @IsEmail()
  email: string;
}
