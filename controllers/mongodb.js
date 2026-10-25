const {MongoClient, ObjectId} = require("mongodb")
const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)

async function main(){
    try{
        await client.connect()
        // await createDocument(client, "contacts", "contacts", data)
        const document = await returnAllDocuments(client, "cubebuster", "media")
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

module.exports = {
    main,
    listDatabases,
    returnAllDocuments,
    returnSingleDocumentById,
    createDocument,
    deleteDocument
}