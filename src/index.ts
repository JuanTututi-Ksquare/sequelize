import express from "express";
import dotenv from "dotenv";
import {initSequelize} from "./models/DBConn";
import {User} from "./models/User"

dotenv.config();

const app = express();

const port = process.env.PORT;
const db_name = <string>process.env.DB_NAME;
const db_user = <string>process.env.DB_USERNAME;
const db_pass = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;

app.listen(port, async () => {
    console.log("Server is running on port:", port);
    await initSequelize(db_name, db_user, db_pass, db_host);
    try {
        await User.create({
            name: "Juan Pablo"
        })
        console.log("Connection has been stablished correctly");
    } catch (error) {
        console.log("An error has ocurred", error);
    }
})