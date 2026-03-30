import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksAPIService {
  getHello(): string {
    return 'Hello World!';
  }
}
