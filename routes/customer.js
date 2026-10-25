const router = require("express").Router()
const customerController = require("../controllers/customer")

//GetAll
router.get("/", customerController.returnAllCustomerRoute)

//GetSingle
router.get("/:id", customerController.returnCustomerRoute)

//Create
router.post("/",
    customerController.createDocumentRoute
     /*  #swagger.parameters['body'] = {
            required: true,
            in: 'body',
            description: 'object to create',
            schema: {
                $first_name: "Bob",
                $last_name: "Jones",
                $phone_number: "(111) 222-3333",
                $email: "bob@email.com",
                $address: "123 ABC Street, New York, NY, 12345",
                $renting: []
            }
    } */
)

//Update
router.put("/:id", customerController.updateDocumentRoute
        /*  #swagger.parameters['body'] = {
            required: true,
            in: 'body',
            description: 'object to edit',
            schema: {
                $first_name: "",
                $last_name: "",
                $phone_number: "",
                $email: "",
                $address: "",
                $renting: []
            }
    } */
)

//Delete
router.delete("/:id", customerController.deleteDocumentRoute)

module.exports = router