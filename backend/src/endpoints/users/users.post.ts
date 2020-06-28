import { Request, Response } from 'express'
import { UserDao } from '../../dao/_index'
import { body, validationResult } from 'express-validator'

export function create(req: Request, res: Response) {

    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return UserDao.create(req.body)
            .then(message => res.status(201).send(message))
            .catch(error => {
                console.log(error)
                res.boom.badRequest(error)
            })
    } else {
        res.boom.badRequest('Validation errors', errors.mapped())
    }

}

// export function login(req: Request, res: Response) {
//
//     const errors = validationResult(req)
//
//     if (errors.isEmpty()) {
//         return UserDao.findByEmail(req.body)
//             .then(user => res.status(200).send(user))
//             .catch(error => res.boom.badRequest(error))
//     } else {
//         res.boom.badRequest('Validation errors', errors.mapped())
//     }
//
// }
