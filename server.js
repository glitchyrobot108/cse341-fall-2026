require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT

app.use("/", require("./routes"))

app.listen(port)
console.log("Web Server is listening at port " + (port))