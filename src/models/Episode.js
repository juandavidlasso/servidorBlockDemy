const mongoose = require('mongoose')
const Schema = mongoose.Schema

const episodeSchema = new Schema({
    name: {
        type: String
    },
    air_date: {
        type: String
    },
    episode: {
        type: String
    },
    characters: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Characters'
    }],
    created: {
        type: Date
    }
})

module.exports = mongoose.model('Episodes', episodeSchema)
