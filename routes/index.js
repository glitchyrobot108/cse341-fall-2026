const routes = require("express").Router()
const lesson1Controller = require("../controllers/lesson1")
const mongodbController = require("../controllers/mongodb")

routes.get("/", lesson1Controller.caseyRoute)
routes.get("/mom", lesson1Controller.momRoute)
routes.get("/dad", lesson1Controller.dadRoute)
routes.get("/cindy", lesson1Controller.cindyRoute)
routes.get("/bella", lesson1Controller.bellaRoute)

//GetAll
routes.get("/contacts", mongodbController.returnAllContactsRoute)
//GetSingle
routes.get("/contacts/:id", mongodbController.returnContactRoute)
//Create
routes.post("/contacts", mongodbController.createDocumentRoute)
//Update
routes.put("/contacts/:id", mongodbController.updateDocumentRoute)
//Delete
routes.delete("/contacts/:id", mongodbController.deleteDocumentRoute)

module.exports = routes