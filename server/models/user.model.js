export default ({ connection, Sequelize, DataTypes }) => {
    const Model = connection.define(
        "users", // Model name
        {
            // Attributes
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            username: {
                type: DataTypes.STRING,
                unique: true
            },
            email: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            token: {
                type: DataTypes.TEXT
            },
            status: {
                type: DataTypes.INTEGER(2),
                defaultValue: 1
            }
        },
        {
            timestamps: true,
            underscrored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    return Model;
}