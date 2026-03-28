import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/users.dto';

@Injectable()
export class UsersService {

    private users: UserDTO[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 24,
      },
    ];

    findAll(){
      return this.users;
    }

}
