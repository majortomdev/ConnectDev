const { ApolloServer } = require ("apollo-server");
const gql = require("graphql-tag");
const mongoose = require('mongoose');

const { MONGODB } = require('../ConnectDev/config');

const typeDefs = gql`
    type Query{
        sayHello: String!
    }
`
const resolvers = {
    Query: {
        sayHello: () => 'Hello gang in the World!!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB,{ useNewUrlParser: true })
        .then(() => {
            console.log('Mongo connected')
            return server.listen({ port: 5000})
        })
        .then(res => {
        console.log(`Server running at ${res.url}`);
    });
