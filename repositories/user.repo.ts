import { User } from "@jocelinofernandes/hl-dtos";

export interface UserRepository {
    addUser(user: User): Promise<void>
    deleteUser(userId: string): Promise<void>
    updateUser(user: User): Promise<void>
    getUsers(query: string | undefined): Promise<User[]>
    getUser(userId: string): Promise<User|null>
}