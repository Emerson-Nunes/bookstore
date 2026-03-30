import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDTO } from 'default/contracts/books/create-book.dto';
import { UpdateBookDTO } from 'default/contracts/books/update-book.dto';
import { BOOKS_PATTERNS } from 'default/contracts/books/books.patterns';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {

  constructor(@Inject('BOOKS_CLIENT') private readonly booksClient: ClientProxy){}

  create(CreateBookDTO: CreateBookDTO) {
    return this.booksClient.send<CreateBookDTO>(BOOKS_PATTERNS.CREATE, CreateBookDTO)
  }

  findAll() {
    return this.booksClient.send<CreateBookDTO>(BOOKS_PATTERNS.FIND_ALL, {})
  }

  findOne(id: number) {
    return this.booksClient.send<CreateBookDTO>(BOOKS_PATTERNS.FIND_ONE, id)
  }

  update(id: number, UpdateBookDTO: UpdateBookDTO) {
    return this.booksClient.send<CreateBookDTO>(BOOKS_PATTERNS.UPDATE, {...UpdateBookDTO, id})
  }

  remove(id: number) {
    return this.booksClient.send<CreateBookDTO>(BOOKS_PATTERNS.REMOVE, id)
  }
}
