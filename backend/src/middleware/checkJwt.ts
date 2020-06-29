import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import config from './config'

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {

    console.log(req.headers['authorization'])
    const token = <string>req.headers['authorization']
    let jwtPayload

    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret)
        res.locals.jwtPayload = jwtPayload
    } catch (error) {
        // console.log(error)
        res.status(401).send({ message: 'Session expired. Please login again to proceed.' })
        return
    }

    const { userId, username } = jwtPayload
    const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
        expiresIn: '1h'
    })
    res.setHeader('token', newToken)

    next()
}