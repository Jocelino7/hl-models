import { Book } from "@jocelinofernandes/hl-dtos";
import { BookRepository } from "../repositories/book.repo";


export class BookRepositoryImpl implements BookRepository {
    model:BookRepository
    constructor(model:BookRepository){
        this.model = model
    }
    async addBook(book: Book): Promise<void> {
        return this.model.addBook(book)
    }
    async deleteBook(bookId: string): Promise<void> {
        return this.model.deleteBook(bookId)
    }
    async updateBook(book: Book): Promise<void> {
        return this.model.updateBook(book)
    }
    async getBooks(query: string | undefined): Promise<Book> {
        return this.model.getBooks(query)
    }
    async getBook(bookId: string): Promise<Book|null> {
        return this.model.getBook(bookId)
    }

}