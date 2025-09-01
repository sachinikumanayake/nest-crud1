import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import  {Model} from 'mongoose'
import { User, UserDocument } from './user/Schemas/user.schema';
@Injectable()
export class AppService {
  constructor(
   @InjectModel('User') private readonly userModel: Model<UserDocument> 
  ){}
 async createUser (user: User): Promise<User>{
  const newUser = new this.userModel(user)
  return newUser.save()
 }

  }

