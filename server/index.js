import Express from "express";
import { connectMongo } from "./database/connect.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

connectMongo();
const app = Express();

const port = process.env.PORT;
app.listen(port, () => console.log(`Service running on port ---> ${port}`));
