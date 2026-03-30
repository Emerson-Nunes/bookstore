import { Module } from '@nestjs/common';
import { BooksAPIController } from './books.controller';
import { BooksAPIService } from './books.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [BooksAPIController],
  providers: [BooksAPIService],
  exports: [BooksAPIService]
})
export class BooksAPIModule {}
