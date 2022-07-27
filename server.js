const express = require('express')
const { connectDB } = require('./src/config/db')
const dotenv = require('dotenv')
const { ApolloServer } = require('apollo-server-express')
const resolvers = require('./src/resolvers')
const schema = require('./src/schema')
const { makeExecutableSchema } = require('@graphql-tools/schema');
dotenv.config()

// Configuracion express
const app = express()
connectDB()


// Creo instancia del schema de graphql
const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers   
});

// Funcion para iniciar el servidor de apollo
async function startServer() {
    const apolloServer = new ApolloServer({
        schema: executableSchema
    })

    // Ejecuto funcion start
    await apolloServer.start()

    apolloServer.applyMiddleware({app})

    // Puerto escucha servidor
    const port = process.env.PORT || 8000
    app.listen({ port  }, () => {
        console.log(`El servidor esta corriendo http://localhost:${port}${apolloServer.graphqlPath}`)
    })
}

// Ejecuto funcion startServer()
startServer()
