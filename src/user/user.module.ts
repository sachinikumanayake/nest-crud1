import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './Schemas/user.schema';
import { AppService } from 'src/app.service';
 

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name,schema: UserSchema }])
  ],
  controllers: [UserController],
  providers: [UserService, AppService],
  exports:[UserService]
})
export class UserModule {}
