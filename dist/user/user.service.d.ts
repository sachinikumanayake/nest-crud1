import { Model } from 'mongoose';
import { User, UserDocument } from './Schemas/user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUser: Partial<User>): Promise<User>;
    remove(id: string): Promise<User>;
}
