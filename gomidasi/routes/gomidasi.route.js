import express from "express";
import { getResult } from "../controllers/gomidasi.controller.js";

export const gomidasiRouter = express.Router();

gomidasiRouter.post("/", (req, res) => getResult(req, res));