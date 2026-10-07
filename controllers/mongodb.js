const {MongoClient, ObjectId} = require("mongodb")
const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)

async function main(){
     const updateDoc = {
          $set: {firstname: "Bob"} 
        }
    try{
        await client.connect()
        // await createDocument(client, "contacts", "contacts", data)
        const document = await updateDocument(client, "contacts", "contacts", {_id: new ObjectId("6ac58cb311c3849eb827c805")}, updateDoc)
        console.log(document)
    } catch (error){
        console.log(error)
    } finally{
        await client.close()
    }
}
// main()

async function listDatabases(client){
    const databases = await client.db().admin().listDatabases()
    console.log(`Databases: `)
    databases.databases.forEach(db => console.log(db.name))
}

async function returnAllDocuments(client, db, collection){
    const documents = await client.db(db).collection(collection).find().toArray()
    const documentsArray = await client.db(db).collection(collection).find().toArray()
    documentsArray.forEach((document) => {console.log(document)})
    return documents
}

async function returnSingleDocumentById(client, db, collection, id){
    const document = await client.db(db).collection(collection).findOne(id)
    return document
}

async function createDocument(client, db, collection, req){
    const document = await client.db(db).collection(collection).insertOne(req.body)
    console.log(document)
    return document
}

async function updateDocument(client, db, collection, id, req){
    let document;
    document = await client.db(db).collection(collection).updateOne(id,  {$set: req.body})
    console.log(document)
    return document
}

async function deleteDocument(client, db, collection, id){
    const document = await client.db(db).collection(collection).deleteOne(id)
    return document
}

async function returnAllContactsRoute(req, res){
    try{
        await client.connect()
        const documents = await returnAllDocuments(client, "contacts", "contacts")
        res.status(200).send(documents)
    } catch (error){
        console.log(error)
    } finally{
        await client.close()
    }
}

async function returnContactRoute(req, res){
    try{
        await client.connect()
        const document = await returnSingleDocumentById(client, "contacts", "contacts", {_id: new ObjectId(req.params.id)})
        res.status(200).send(document)
    } catch (error){
        console.log(error)
        res.send("Contact not found")
    } finally{
        await client.close()
    }
}

async function createDocumentRoute(req, res){
    try{
        await client.connect()
        const document = await createDocument(client, "contacts", "contacts", req)
        res.status(201).send(document)
    } catch (error){
        console.log(error)
        res.send("Contact not found")
    } finally{
        await client.close()
    }
}


async function updateDocumentRoute(req, res){
    try{
        await client.connect()
        const document = await updateDocument(client, "contacts", "contacts", {_id: new ObjectId(req.params.id)}, req)
        res.status(204).send(document)
    } catch (error){
        console.log(error)
        res.send("Contact not found")
    } finally{
        await client.close()
    }
}

async function deleteDocumentRoute(req, res){
    try{
        await client.connect()
        const document = await deleteDocument(client, "contacts", "contacts", {_id: new ObjectId(req.params.id)})
        res.status(200).send(document)
    } catch (error){
        console.log(error)
        res.send("Contact not found")
    } finally{
        await client.close()
    }
}

module.exports = {
    main,
    listDatabases,
    returnAllDocuments,
    returnSingleDocumentById,
    returnAllContactsRoute,
    returnContactRoute,
    createDocument,
    createDocumentRoute,
    updateDocumentRoute,
    deleteDocument,
    deleteDocumentRoute
}