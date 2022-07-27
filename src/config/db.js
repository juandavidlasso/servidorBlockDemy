const { connect } = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URI)
        .then( () => console.log('connected'))
        .catch(err => console.log(err))
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connectDB }