const Character = require('../models/Character')
const Episode = require('../models/Episode')
const Location = require('../models/Location')

module.exports = {
    characters: async (parent, args, context, info) => {
        try {
            let character = await Character.count().exec().then( async (resultCount) => {
                const random = Math.floor(Math.random() * resultCount)
                const data = await Character.findOne().skip(random).populate('origin').populate('location').populate('episode').exec().then( (res) => {
                    return res
                })
                return data
            })
            return character
        } catch (error) {
            return error
        }
    },
    character: async (parent, {id}, context, info) => {
        try {
            const character = await Character.findById(id)
            return character
        } catch (error) {
            return error
        }
    },
    episodes: async (parent, args, context, info) => {
        try {
            const episode = await Episode.find().populate('characters')
            return episode
        } catch (error) {
            return error
        }
    },
    episode: async (parent, {id}, context, info) => {
        try {
            const episode = await Episode.findById(id).populate('characters')
            return episode   
        } catch (error) {
            return error
        }
    },
    locations: async (parent, args, context, info) => {
        try {
            const location = await Location.find().populate('residents')
            return location
        } catch (error) {
            return error
        }
    },
    location: async (parent, {id}, context, info) => {
        try {
            const location = await Location.findById(id).populate('residents')
            return location
        } catch (error) {
            return error
        }
    }
}