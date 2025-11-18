import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe, BadRequestException } from '@nestjs/common';
import { AppService } from '../app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    if (!createUserDto.email) {
      throw new BadRequestException('Email is required');
    }
    return this.appService.createUser(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.appService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.appService.findUserById(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.appService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.appService.removeUser(id);
  }
}
