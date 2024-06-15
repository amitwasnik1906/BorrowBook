const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

const transactionRoute = require("./routes/transaction.route")
app.use("/api/v1", transactionRoute)

module.exports = app
