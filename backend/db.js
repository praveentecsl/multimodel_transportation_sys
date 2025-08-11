
const { MongoClient} = require('mongodb')

let dbConnection

module.exports = {

    connectToDb: (cb) => {
        MongoClient.connect('connection string')
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