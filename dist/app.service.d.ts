import { Repository } from 'typeorm';
import { User } from './user/user.entity';
export declare class AppService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: Partial<User>): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findUserById(id: number): Promise<User>;
    updateUser(id: number, user: Partial<User>): Promise<User>;
    removeUser(id: number): Promise<void>;
}
