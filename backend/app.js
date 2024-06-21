const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// Routes
const transactionRoute = require("./routes/transaction.route")
app.use("/api/v1", transactionRoute)

// middlewares
const errorMiddleware = require("./middleware/error")
app.use(errorMiddleware)

module.exports = app
