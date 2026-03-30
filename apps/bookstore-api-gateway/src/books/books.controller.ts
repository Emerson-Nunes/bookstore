import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from 'default/contracts/books/create-book.dto';
import { UpdateBookDTO } from 'default/contracts/books/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() CreateBookDTO: CreateBookDTO) {
    return this.booksService.create(CreateBookDTO);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() UpdateBookDTO: UpdateBookDTO) {
    return this.booksService.update(+id, UpdateBookDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.booksService.remove(+id);
  }
}
