// app.js

import express from "express";

import { gomidasiRouter } from "./routes/gomidasi.route.js";


const app = express();
// ð½ è¿½å  POSTã§ãã¼ã¿ãåãåãããã«å¿è¦
app.use(express.urlencoded({ extended: true }));
// ð½ è¿½å  JSONãã¼ã¿ãä½¿ç¨ããããã«å¿è¦
app.use(express.json());

const port = 3001;

app.get("/", (req, res) => {
    res.json({
        uri: "/",
        message: "Hello Node.js!",
      });
    });
// ð½ è¿½å  ã´ãåºãã®ã«ã¼ãã£ã³ã°ãå¤æ´
app.use("/gomidasi", (req, res) => gomidasiRouter(req, res));




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

