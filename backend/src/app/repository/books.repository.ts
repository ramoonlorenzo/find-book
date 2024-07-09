import { BookEntity } from "../../domain/entity/book.entity";
import { BookDto } from "../dto/bookDto";

abstract class BooksRepository {
  abstract create(dto: BookDto): void;
  abstract find(
    search: string,
    embedding: number[],
    matchedBooks: Record<string, any>
  ): Promise<BookEntity[] | null>;
  abstract update(dto: BookDto, id: string): Promise<BookEntity | null>;
}

export { BooksRepository };
