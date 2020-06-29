import {Model, STRING, BOOLEAN } from 'sequelize'
import sequelize from './_index'
import {User} from "./user";

export class StringCalc extends Model {
    id: string
    userId: string
    result: boolean
    createdAt: Date
    updatedAt: Date
}

StringCalc.init(
    {
        userId: STRING,
        result: BOOLEAN,
    },
    { sequelize, modelName: 'StringCalc' }
)

StringCalc.belongsTo(User, {
    foreignKey: 'userId'
})