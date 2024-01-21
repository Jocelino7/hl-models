import { User } from "@jocelinofernandes/hl-dtos";
import { UserRepository } from "../repositories/user.repo";

export class UserModel implements UserRepository {
    getUser(userId: string): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async addUser(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteUser(userId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateUser(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getUsers(query: string | undefined): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

}