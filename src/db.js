const {connect} = require('mongoose')

const db = 'mongodb://localhost:27017/upload'

const connectDb = async () => {
    try {
        await connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('DB_CONNECT');
    } catch (error) {
        console.error('DB CONNECTION ERROR:', error)
    }
}

module.exports = { connectDb, connection: mongoose.connection };