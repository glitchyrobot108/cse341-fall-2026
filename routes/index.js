const routes = require("express").Router()
const lesson1Controller = require("../controllers/lesson1")
const mongodbController = require("../controllers/mongodb")

// routes.get("/", lesson1Controller.caseyRoute)
// routes.get("/mom", lesson1Controller.momRoute)
// routes.get("/dad", lesson1Controller.dadRoute)
// routes.get("/cindy", lesson1Controller.cindyRoute)
// routes.get("/bella", lesson1Controller.bellaRoute)

//GetAll
routes.get("/contacts", mongodbController.returnAllContactsRoute)
//GetSingle
routes.get("/contacts/:id", mongodbController.returnContactRoute)
//Create
routes.post("/contacts",
    mongodbController.createDocumentRoute
     /*  #swagger.parameters['body'] = {
            required: true,
            in: 'body',
            description: 'object to create',
            schema: {
                $firstName: "Bob",
                $lastName: "Jones",
                $email: "bob@email.com",
                $favoriteColor: "Red",
                $birthday: "1-1-2000"
            }
    } */
)

//Update
routes.put("/contacts/:id", mongodbController.updateDocumentRoute
        /*  #swagger.parameters['body'] = {
            required: true,
            in: 'body',
            description: 'object to edit',
            schema: {
                $firstName: "",
                $lastName: "",
                $email: "",
                $favoriteColor: "",
                $birthday: ""
            }
    } */
)
//Delete
routes.delete("/contacts/:id", mongodbController.deleteDocumentRoute)

module.exports = routes