import * as winston from 'winston'
import { Express, Request, Response } from 'express'
import * as UserRoutes from './users'
import * as AuthRoutes from './auth'
import * as StringCalcRoutes from './string'

export function initRoutes(app: Express) {
  winston.log('info', '--> Initialisations des routes')

  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }))

  UserRoutes.routes(app)
  AuthRoutes.routes(app)
  StringCalcRoutes.routes(app)

  app.all('*', (req: Request, res: Response) => res.boom.notFound())
}
