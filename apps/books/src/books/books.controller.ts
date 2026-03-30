import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { CreateBookDTO } from 'default/contracts/books/create-book.dto';
import { UpdateBookDTO } from 'default/contracts/books/update-book.dto';
import { BOOKS_PATTERNS } from 'default/contracts/books/books.patterns';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern(BOOKS_PATTERNS.CREATE)
  create(@Payload() CreateBookDTO: CreateBookDTO) {
    return this.booksService.create(CreateBookDTO);
  }

  @MessagePattern(BOOKS_PATTERNS.FIND_ALL)
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern(BOOKS_PATTERNS.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern(BOOKS_PATTERNS.UPDATE)
  update(@Payload() UpdateBookDTO: UpdateBookDTO) {
    return this.booksService.update(UpdateBookDTO.id, UpdateBookDTO);
  }

  @MessagePattern(BOOKS_PATTERNS.REMOVE)
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
