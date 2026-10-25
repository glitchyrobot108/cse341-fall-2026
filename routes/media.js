const router = require("express").Router()
const mediaController = require("../controllers/media")

//GetAll
router.get("/", mediaController.returnAllMediaRoute)

//GetSingle
router.get("/:id", mediaController.returnMediaRoute)

//Create
router.post("/",
    mediaController.createDocumentRoute
     /*  #swagger.parameters['body'] = {
            required: true,
            in: 'body',
            description: 'object to create',
            schema: {
                name: 'Star Wars',
                release_date: 'May 25, 1977',
                media_type: 'movie, music, videogame',
                storage_type: 'VHS, CD, DVD, RECORD, CASSETTE, CARTRIDGE'
            }
    } */
)



//Update
router.put("/:id", mediaController.updateDocumentRoute
        /*  #swagger.parameters['body'] = {
            required: true,
            in: 'body',
            description: 'object to edit',
            schema: {
                name: '',
                release_date: '',
                media_type: 'movie, music, videogame',
                storage_type: 'VHS, CD, DVD, RECORD, CASSETTE, CARTRIDGE'
            }
    } */
)

//Delete
router.delete("/:id", mediaController.deleteDocumentRoute)

module.exports = router