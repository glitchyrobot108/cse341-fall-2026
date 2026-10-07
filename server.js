require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("/", require("./routes"))

app.listen(port)
console.log("Web Server is listening at port " + (port))