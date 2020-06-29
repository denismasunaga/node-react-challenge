import {Model, STRING, INTEGER} from 'sequelize'
import sequelize from './_index'
import { StringCalc } from "./stringCalc";

export class Positions extends Model {
    number: number
    calculationsHistoryId: string
    createdAt: Date
    updatedAt: Date
}

Positions.init(
    {
        number: INTEGER,
        calculationsHistoryId: STRING,
    },
    { sequelize, modelName: 'StringCalc' }
)

Positions.belongsTo(StringCalc, {
    foreignKey: 'stringCalcId'
})