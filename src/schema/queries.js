module.exports= `
  type Query {
    characters : Character
    character(id: ID!) : Character
    episodes : [Episode]
    episode(id: ID!) : Episode
    locations : [Location]
    location(id: ID!) : Location
  }
`
