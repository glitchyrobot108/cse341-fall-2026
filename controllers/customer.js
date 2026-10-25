const {MongoClient, ObjectId} = require("mongodb")
const mongoDBController = require("./mongodb")
const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)

async function returnAllCustomerRoute(req, res){
    try{
        await client.connect()
        const documents = await mongoDBController.returnAllDocuments(client, "cubebuster", "customer")
        res.status(200).send(documents)
    } catch (error){
        console.log(error)
    } finally{
        await client.close()
    }
}

async function returnCustomerRoute(req, res){
    try{
        await client.connect()
        const document = await mongoDBController.returnSingleDocumentById(client, "cubebuster", "customer", {_id: new ObjectId(req.params.id)})
        res.status(200).send(document)
    } catch (error){
        console.log(error)
        res.send("Customer not found")
    } finally{
        await client.close()
    }
}

async function createDocumentRoute(req, res){
    try{
        await client.connect()
        const document = await mongoDBController.createDocument(client, "cubebuster", "customer", req)
        res.status(201).send(document)
    } catch (error){
        console.log(error)
        res.send("Customer not found")
    } finally{
        await client.close()
    }
}


async function updateDocumentRoute(req, res){
    try{
        await client.connect()
        const document = await mongoDBController.updateDocument(client, "cubebuster", "customer", {_id: new ObjectId(req.params.id)}, req)
        res.status(204).send(document)
    } catch (error){
        console.log(error)
        res.send("Customer not found")
    } finally{
        await client.close()
    }
}

async function deleteDocumentRoute(req, res){
    try{
        await client.connect()
        const document = await mongoDBController.deleteDocument(client, "cubebuster", "customer", {_id: new ObjectId(req.params.id)})
        res.status(200).send(document)
    } catch (error){
        console.log(error)
        res.send("Customer not found")
    } finally{
        await client.close()
    }
}

module.exports = {
    returnAllCustomerRoute,
    returnCustomerRoute,
    createDocumentRoute,
    updateDocumentRoute,
    deleteDocumentRoute
}