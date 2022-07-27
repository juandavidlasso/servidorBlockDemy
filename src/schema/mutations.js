module.exports= `
  type Mutation {
    deleteCharacter(idCharacter: ID) : ResponseMessage
    updateCharacter(idCharacter: ID, input: CharacterInput) : Character
  }
`
