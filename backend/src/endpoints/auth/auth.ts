import {Request, Response} from 'express'
import * as jwt from 'jsonwebtoken'
import {findByEmail} from '../../dao/users'
import {User} from '../../sqlz/models/user'
import config from '../../middleware/config'

export async function login (req: Request, res: Response) {

    let {email, password} = req.body
    if (!(email && password)) {
        res.status(400).send()
    }

    const user: User = await findByEmail(email)

    if (!user) {
        res.status(401).send()
        return
    }

    const checkPassword = await user.checkPassword(password)

    if (!checkPassword) {
        res.status(401).send()
        return
    }

    const token = jwt.sign(
        {userId: user.id},
        config.jwtSecret,
        {expiresIn: '1h'}
    )

    res.send({token: token})
}
