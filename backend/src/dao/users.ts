import * as uuid from 'uuid'
import { User } from '../sqlz/models/user'

export async function create(user: any): Promise<any> {
    try {
        await User.create({
            id: uuid.v1(),
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            createdAt: new Date(),
            updatedAt: new Date()
        })

        return { message: 'User created successfully.' }
    } catch (error) {
        console.log(error)
        return Promise.reject('Could not create new user.')
    }
}

export function findAll(): Promise<any> {
    return User
        .findAll({ include: [{ all: true }] })
}

export async function findByEmail(email: string): Promise<any> {
    try {
        const user = User
            .findOne({
                where: {
                    email: email
                },
            })

        if (user) {
            return Promise.resolve(user)
        } else {
            return Promise.reject('Could not find User.')
        }
    } catch (error) {
        console.log(error)
        return Promise.reject('Error looking for User.')
    }
}
