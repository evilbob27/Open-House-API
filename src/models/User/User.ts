import { User, UserDTO } from './User.d';
import crypto from 'crypto';
import argon2 from 'argon2';

export class UserModel {
    private users: User[] = [];

    async findAll(): Promise<User[]> {
        // TODO: Hook up to DB
        return this.users;
    }

    async findByEmail(email: string): Promise<User | null> {
        // TODO: Hook up to DB
        const user = this.users.find(user => user.email === email);
        return user || null;
    }

    async create(input: UserDTO): Promise<User> {
        const existingUser = await this.findByEmail(input.email);

        if (existingUser) {
            throw new Error('User with this email already exists.')
        }

        const hashedPassword = await argon2.hash(input.password, {
            type: argon2.argon2id
        });

        const newUser: User = {
            id: crypto.randomUUID(),
            email: input.email,
            password: hashedPassword,
            createdAt: new Date(),
        }

        // TODO: Hook up to DB
        this.users.push(newUser);
        return newUser;
    }

    // update

    // delete

    // verifyPassword

    // findById
}
