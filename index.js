require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./app/router");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});
