const routes = require("express").Router()

routes.use("/", require("./swagger"))
routes.use("/customer", require("./customer"))
routes.use("/media", require("./media"))

module.exports = routes