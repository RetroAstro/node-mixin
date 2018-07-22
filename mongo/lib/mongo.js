
const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', console.error.bind( 'connection error :(' ))

db.once('open', console.log.bind( 'connection success :)' ))

const MessageSchema = Schema({
    message: {
        type: String,
        required: true
    }
})

const PersonSchema = Schema({
    name: {
        type: String,
        required: true
    },
    messages: [MessageSchema],
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        }
    }
})

module.exports = mongoose.model('Person', PersonSchema)
