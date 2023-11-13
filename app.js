const express = require("express");
const cors = require("cors");
const app = express();
const Router = require("./app/routes/route");


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Books Store" });
});

app.use("/api/products", Router);


module.exports = app;