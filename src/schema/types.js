module.exports = `
    type Character {
        id: ID
        name: String
        status: String
        species: String
        type: String
        gender: String
        origin: Location
        location: Location
        image: String
        episode: [Episode]
        created: String
    }


    input CharacterInput {
        name: String
        status: String
        species: String
        type: String
        gender: String
    }


    type Episode {
        id: ID
        name: String
        air_date: String
        episode: String
        characters: [Character]
        created: String
    }

    type Location {
        id: ID
        name: String
        type: String
        dimension: String
        residents: [Character]
        created: String
    }


    type ResponseMessage {
        success: Boolean,
        message: String
    }
`