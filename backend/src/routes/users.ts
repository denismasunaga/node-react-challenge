import { Express } from 'express'
import { UserController } from '../endpoints/_index'
import { userValidations } from '../endpoints/users/users.validations'
import { checkJwt } from '../middleware/checkJwt'

export function routes(app: Express) {

  app.get('/api/users', checkJwt, UserController.UserGet.list)
  app.post('/api/users', userValidations, UserController.UserPost.create)
  // app.post('/api/login', userValidations, UserController.UserPost.login)

}
