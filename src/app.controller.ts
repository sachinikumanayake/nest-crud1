import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './user/dto/create-user.dto';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    return this.appService.createUser(user);
  }
}

  
  

