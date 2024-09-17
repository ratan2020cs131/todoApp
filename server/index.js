import Express from "express";
import { connectMongo } from "./database/connect.js";
import dotenv from "dotenv";
import IndexRouter from './routes/index.js'

dotenv.config({ path: "./.env" });

connectMongo();
const app = Express();
app.use(Express.json())
app.use(IndexRouter)

const port = process.env.PORT;
app.listen(port, () => console.log(`Service running on port ---> ${port}`));
