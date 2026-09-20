const routes = require("express").Router()
const lesson1Controller = require("../controllers/lesson1")

routes.get("/", lesson1Controller.caseyRoute)
routes.get("/mom", lesson1Controller.momRoute)
routes.get("/dad", lesson1Controller.dadRoute)
routes.get("/cindy", lesson1Controller.cindyRoute)
routes.get("/bella", lesson1Controller.bellaRoute)

module.exports = routes