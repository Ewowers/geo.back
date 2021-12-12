const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const EXPORT = require("./exportPG");
const cors = require("cors");
const api = require("./api");
const app = express();
//use
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//api
app.use("/api", api);
// EXPORT(); //запуск экспорта
const start = async () => {
  try {
    //const url = "mongodb://localhost:27017/Atyrau"; // ссылка к базе
    const urlProduction = "mongodb+srv://Ewojer:Ewojer123@cluster0.yc9cn.mongodb.net/Atyrau";
    await mongoose.connect(urlProduction, {
      // подключение к монго
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(mongoose.schema);
    const port = process.env.PORT || 8001;
    app.listen(port, () => {
      console.log("run " + port);
    });
  } catch (err) {
    console.error;
  }
};
start();
