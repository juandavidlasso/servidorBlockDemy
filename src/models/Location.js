const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    dimension: {
        type: String
    },
    residents: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Characters'
    }],
    created: {
        type: Date
    }
})

module.exports = mongoose.model('Locations', locationSchema)
