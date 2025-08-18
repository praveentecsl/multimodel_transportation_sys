require('dotenv').config();
const { MongoClient} = require('mongodb')


let dbConnection

module.exports = {

    connectToDb: (cb) => {
        const uri = process.env.MONGO_URI;
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}