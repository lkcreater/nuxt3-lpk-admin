import { Sequelize } from 'sequelize';

export default async () => {   
    try {
        const sequelize = new Sequelize(
            'db_nuxt3_app',
            'root',
            'root',
            {
                host: 'localhost',
                dialect: "mysql",
                port: 8889,
                operatorsAliases: false,
        
                poll: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            }
        )
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        return sequelize;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }    
}
