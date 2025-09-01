import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { User, UserSchema } from './user/Schemas/user.schema';
import { UserModule } from './user/user.module'; 
import { AppService } from './app.service';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-crud'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule, 
    
  ],
  controllers: [AppController],
  providers: [AppService]
 
  
})
export class AppModule {}
