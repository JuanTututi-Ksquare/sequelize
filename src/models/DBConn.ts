import { Sequelize } from "sequelize";
import { initUserModel } from "./User"

export let sequelize: Sequelize;

const models = [initUserModel]

export const initSequelize = async(db_name:string, db_username:string, db_pass:string | undefined, db_host:string | undefined) => {
    sequelize = new Sequelize(db_name, db_username, db_pass, {
        host: db_host,
        dialect: "postgres"
    })

    for (const model of models) {
        model(sequelize);
    }

    sequelize.sync();

    return sequelize;
}