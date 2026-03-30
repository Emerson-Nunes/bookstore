import { Injectable } from '@nestjs/common';
import { CreateBookDTO } from './dto/create-book.dto';
import { UpdateBookDTO } from './dto/update-book.dto';
import { BookDTO } from './dto/book.dto';

@Injectable()
export class BooksService {

  private books: BookDTO[] = [
    {
      id: 1,
      title: 'Title 1',
      author: 'Author 1',
      rating: 3.9,
    },
    {
      id: 2,
      title: 'Title 2',
      author: 'Author 2',
      rating: 4.7,
    }
  ]


  create(CreateBookDTO: CreateBookDTO) {
    const newBook: BookDTO = {
      ...CreateBookDTO,
      id: this.books.length + 1,
    }

    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find(books => books.id === id);
  }

  update(id: number, UpdateBookDTO: UpdateBookDTO) {
    return this.books[id - 1] = {
      ...UpdateBookDTO,
      id,
    };
  }

  remove(id: number) {
    // return this.books.pop(this.books[id]);
  }
}
