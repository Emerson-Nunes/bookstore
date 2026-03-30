import { Controller, Get } from '@nestjs/common';
import { BooksAPIService } from './books.service';

@Controller()
export class BooksAPIController {
  constructor(private readonly booksService: BooksAPIService) {}

  @Get()
  getHello(): string {
    return this.booksService.getHello();
  }
}
