import { Request, Response } from 'express'

export function isNonContiguousSubstring(req: Request, res: Response) {
    const stringA = req.body['a']
    const stringB = req.body['b']

    let allPos = []
    let stringBPos = 0

    for (let i = 0; i < stringA.length; i++) {
        if (stringA.charAt(i) === stringB.charAt(stringBPos)) {
            allPos.push(i)
            stringBPos++

            if (stringBPos === stringB.length) {
                res.send({ isNCS: true, positions: allPos })
                return
            }
        }
    }
    res.send({ isNCS: false })
}
