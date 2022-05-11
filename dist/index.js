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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const DBConn_1 = require("./models/DBConn");
const User_1 = require("./models/User");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USERNAME;
const db_pass = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Server is running on port:", port);
    yield (0, DBConn_1.initSequelize)(db_name, db_user, db_pass, db_host);
    try {
        yield User_1.User.create({
            name: "Juan Pablo"
        });
        console.log("Connection has been stablished correctly");
    }
    catch (error) {
        console.log("An error has ocurred", error);
    }
}));
