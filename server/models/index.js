import { Sequelize, DataTypes, Op, QueryTypes } from 'sequelize';
import connectDatabaseInstance from "@/server/config/db";

//-- load models
import userModel from "./user.model";

export default async () => {
    try {
        //-- connect database
        const connection = await connectDatabaseInstance();

        // register models
        const Model = {
            user: userModel({ connection, Sequelize, DataTypes, Op, QueryTypes }),
        };
    
        //-- sync all models
        await connection.sync({ force: true });


        return Model;
    } catch (error) {
        throw error;
    }
    
}