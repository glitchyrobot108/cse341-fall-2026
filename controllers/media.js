const {MongoClient, ObjectId} = require("mongodb")
const mongoDBController = require("./mongodb")
const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)

async function returnAllMediaRoute(req, res){
    try{
        await client.connect()
        const documents = await mongoDBController.returnAllDocuments(client, "cubebuster", "media")
        res.status(200).send(documents)
    } catch (error){
        console.log(error)
    } finally{
        await client.close()
    }
}

async function returnMediaRoute(req, res){
    try{
        await client.connect()
        const document = await mongoDBController.returnSingleDocumentById(client, "cubebuster", "media", {_id: new ObjectId(req.params.id)})
        res.status(200).send(document)
    } catch (error){
        console.log(error)
        res.send("Media not found")
    } finally{
        await client.close()
    }
}

async function createDocumentRoute(req, res){
    try{
        await client.connect()
        const document = await mongoDBController.createDocument(client, "cubebuster", "media", req)
        res.status(201).send(document)
    } catch (error){
        console.log(error)
        res.send("Media not found")
    } finally{
        await client.close()
    }
}


async function updateDocumentRoute(req, res){
    try{
        await client.connect()
        const document = await mongoDBController.updateDocument(client, "cubebuster", "media", {_id: new ObjectId(req.params.id)}, req)
        res.status(204).send(document)
    } catch (error){
        console.log(error)
        res.send("Media not found")
    } finally{
        await client.close()
    }
}

async function deleteDocumentRoute(req, res){
    try{
        await client.connect()
        const document = await mongoDBController.deleteDocument(client, "cubebuster", "media", {_id: new ObjectId(req.params.id)})
        res.status(200).send(document)
    } catch (error){
        console.log(error)
        res.send("Media not found")
    } finally{
        await client.close()
    }
}

module.exports = {
    returnAllMediaRoute,
    returnMediaRoute,
    createDocumentRoute,
    updateDocumentRoute,
    deleteDocumentRoute
}