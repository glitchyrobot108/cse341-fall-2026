const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) =>{
    res.send("Casey Owens")
})

app.listen(port)
console.log('Web Server is listening at port ' + (port))