import { body } from 'express-validator'

export const userValidations = [
    body('password', 'Password is required').notEmpty(),
    body('email', 'Email is required').notEmpty(),
    body('email', 'A valid email is required').isEmail()
]