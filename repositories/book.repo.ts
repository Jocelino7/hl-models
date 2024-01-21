import { Book } from "@jocelinofernandes/hl-dtos/index"
export interface BookRepository {
    addBook(book: Book): Promise<void>
    deleteBook(bookId: string): Promise<void>
    updateBook(book: Book): Promise<void>
    getBooks(query: string | undefined): Promise<Book>
    getBook(bookId: string): Promise<Book | null>
}