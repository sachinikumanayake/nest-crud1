import { Model } from 'mongoose';
import { User, UserDocument } from './user/Schemas/user.schema';
export declare class AppService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(user: User): Promise<User>;
}
