import { Express } from 'express'
import { StringCalcController } from '../endpoints/_index'
import { checkJwt } from '../middleware/checkJwt'

export function routes(app: Express) {
    app.post('/api/string-calc', checkJwt, StringCalcController.StringCalc.isNonContiguousSubstring)
}