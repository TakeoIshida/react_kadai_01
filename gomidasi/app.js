// app.js

import express from "express";

import { gomidasiRouter } from "./routes/gomidasi.route.js";


const app = express();
// 🔽 追加 POSTでデータを受け取るために必要
app.use(express.urlencoded({ extended: true }));
// 🔽 追加 JSONデータを使用するために必要
app.use(express.json());

const port = 3001;

app.get("/", (req, res) => {
    res.json({
        uri: "/",
        message: "Hello Node.js!",
      });
    });
// 🔽 追加 ゴミ出しのルーティングを変更
app.use("/gomidasi", (req, res) => gomidasiRouter(req, res));




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

