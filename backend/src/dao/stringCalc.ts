import * as uuid from 'uuid'
import { StringCalc } from '../sqlz/models/stringCalc'
import { Positions } from '../sqlz/models/positions'

export async function create(stringCalc: any, userId: string): Promise<any> {
    try {
        const stringCalcId = uuid.v1()
        await StringCalc.create({
            id: stringCalcId,
            userId: userId,
            result: stringCalc.result,
            createdAt: new Date(),
            updatedAt: new Date()
        })

        for (let i = 0; i < stringCalc.positions.length; i++) {
            await Positions.create( {
                number: stringCalc.positions[i],
                calculationsHistoryId: stringCalcId
            })
        }

        return { message: 'StringCalculationHistory created successfully.' }
    } catch (error) {
        console.log(error)
        return Promise.reject('Could not create new StringCalculationHistory.')
    }
}

export function findAllFromUser(userId: any): Promise<any> {
    return StringCalc
        .findAll({ where: { userId: userId } })
}
