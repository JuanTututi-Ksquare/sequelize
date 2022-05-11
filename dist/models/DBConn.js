"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSequelize = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const User_1 = require("./User");
const models = [User_1.initUserModel];
const initSequelize = (db_name, db_username, db_pass, db_host) => __awaiter(void 0, void 0, void 0, function* () {
    exports.sequelize = new sequelize_1.Sequelize(db_name, db_username, db_pass, {
        host: db_host,
        dialect: "postgres"
    });
    for (const model of models) {
        model(exports.sequelize);
    }
    exports.sequelize.sync();
    return exports.sequelize;
});
exports.initSequelize = initSequelize;
