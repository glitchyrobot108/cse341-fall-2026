const {MongoClient, Int32} = require("mongodb")
const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)

async function main(){
    try{
        await client.connect()
    } catch (error){
        console.log(error)
    } finally{
        await client.close()
    }
}

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

async function returnSingleDocumentById(client, db, collection, query){
    const document = await client.db(db).collection(collection).findOne(query)
    return document
}

async function returnAllContactsRoute(req, res){
    try{
        await client.connect()
        const documents = await returnAllDocuments(client, "contacts", "contacts")
        res.send(documents)
    } catch (error){
        console.log(error)
    } finally{
        await client.close()
    }
}

async function returnContactRoute(req, res){
    try{
        await client.connect()
        const document = await returnSingleDocumentById(client, "contacts", "contacts", {_id: new Int32(req.params.id)})
        if (document != null){
            res.json(document)
        }else{
            res.send("Contact not found")
        }
    } catch (error){
        console.log(error)
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
    returnContactRoute
}