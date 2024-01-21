import { User } from "@jocelinofernandes/hl-dtos";
import { UserRepository } from "../repositories/user.repo";

export class UserRepositoryImpl implements UserRepository {
    model: UserRepository
    constructor(model: UserRepository) {
        this.model = model
    }
    async getUser(userId: string): Promise<User|null> {
        return this.model.getUser(userId)
    }
    async addUser(user: User): Promise<void> {
        return this.model.addUser(user)
    }
    async deleteUser(userId: string): Promise<void> {
        return this.model.deleteUser(userId)
    }
    async updateUser(user: User): Promise<void> {
        return this.model.updateUser(user)
    }
    async getUsers(query: string | undefined): Promise<User[]> {
        return this.model.getUsers(query)
    }

}