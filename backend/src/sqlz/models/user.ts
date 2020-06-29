import {Model, STRING, VIRTUAL} from 'sequelize'
import sequelize from './_index'
import * as bcrypt from 'bcrypt'
import {StringCalc} from "./stringCalc";

export class User extends Model {
    id: string
    fullName: string
    email: string
    password: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date

    public async checkPassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.passwordHash)
    }
}

User.init(
    {
        email: STRING,
        fullName: STRING,
        password: VIRTUAL,
        passwordHash: STRING
    },
    { sequelize, modelName: 'User' }
)

User.addHook('beforeSave', async (user: User): Promise<void> => {
    if (user.password) {
        user.passwordHash = await bcrypt.hash(user.password, 10)
    }
})

User.hasMany(StringCalc, {
    foreignKey: 'stringCalcId'
})