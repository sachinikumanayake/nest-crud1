import { AppService } from './app.service';
import { CreateUserDto } from './user/dto/create-user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    create(user: CreateUserDto): Promise<import("./user/user.entity").User>;
}
