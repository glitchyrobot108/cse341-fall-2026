require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT
const swaggerUIexpress = require("swagger-ui-express")
const swaggerDocument = require("./swagger-output.json")

app.use(express.json())
app.use("/", require("./routes"))
app.use("/", (req, res) =>{
    res.sendFile('directory.html', {root: __dirname })
})
app.use("/api-docs", swaggerUIexpress.serve, swaggerUIexpress.setup(swaggerDocument))

app.listen(port)
console.log("Web Server is listening at port " + (port))