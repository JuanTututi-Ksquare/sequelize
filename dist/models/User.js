"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUserModel = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
const initUserModel = (sequelize) => {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: new sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        age: sequelize_1.DataTypes.INTEGER,
    }, {
        tableName: "users",
        sequelize: sequelize,
    });
    User.sync();
};
exports.initUserModel = initUserModel;
