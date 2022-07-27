const Character = require('../models/Character')

module.exports = {
    // Delete character
    deleteCharacter: async (parent, {idCharacter}, ctx, info) => {
        const character = await Character.findById(idCharacter)

        if (!character) {
            throw new Error('The character does not exists!')
        }

        await Character.findOneAndDelete({_id: idCharacter})

        return {
            success: true,
            message: 'The character was deleted successfully'
        }
    },
    // Update character
    updateCharacter: async (parent, {idCharacter, input}, ctx, info) => {
        let character = await Character.findById(idCharacter)

        if (!character) {
            throw new Error('The character does not exists!')
        }

        character = await Character.findOneAndUpdate({_id: idCharacter}, input, { new: true })

        return character
    }
}