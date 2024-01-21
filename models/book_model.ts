import {Book} from "@jocelinofernandes/hl-dtos"
import { BookRepository } from "../repositories/book.repo";

export class BookModel implements BookRepository {
    async getSingleBook(bookId: string): Promise<Book> {
        throw new Error("Method not implemented.");
    }
    async addBook(book: Book): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteBook(bookId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateBook(book: Book): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getBooks(query: string | undefined): Promise<Book> {
        throw new Error("Method not implemented.");
    }
   

}