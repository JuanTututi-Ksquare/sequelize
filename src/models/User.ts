import { initSequelize } from "./DBConn";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";
import sequelize from "sequelize";

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare age: CreationOptional<number>;
}

export const initUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: new DataTypes.STRING(100),
        allowNull: false,
      },
      age: DataTypes.INTEGER,
    },
    {
      tableName: "users",
      sequelize: sequelize,
    }
  );
  User.sync();
};
