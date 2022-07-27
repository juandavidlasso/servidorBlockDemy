const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: {
        type: String
    },
    status: {
        type: String
    },
    species: {
        type: String
    },
    type: {
        type: String
    },
    gender: {
        type: String
    },
    origin: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Locations'
    },
    location: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Locations'
    },
    image: {
        type: String
    },
    episode: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Episodes'
    }],
    created: {
        type: Date
    }
})

module.exports = mongoose.model('Characters', characterSchema)
