import * as functions from "firebase-functions";
import favoriteRouter from "./routes/favoriteRouter";
import express = require("express");
import cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", favoriteRouter);
export const api = functions.https.onRequest(app);
