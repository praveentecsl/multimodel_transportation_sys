
const { MongoClient} = require('mongodb')

let dbConnection

module.exports = {

    connectToDb: (cb) => {
        MongoClient.connect('mongodb+srv://praveendb:banana1234@cluster0.lqcd63a.mongodb.net/bookStore?retryWrites=true&w=majority&appName=Cluster0')
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