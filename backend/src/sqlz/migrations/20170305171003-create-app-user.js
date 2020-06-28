module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true
            },
            fullName: {
                allowNull: false,
                type: Sequelize.STRING(100),
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING(50),
                unique: true
            },
            passwordHash: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    ,
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
}
