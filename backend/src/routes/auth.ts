import { Express } from 'express'
import { AuthController } from '../endpoints/_index'
import { checkJwt } from '../middleware/checkJwt'

export function routes(app: Express) {

    app.post('/api/login', AuthController.Auth.login)

}
