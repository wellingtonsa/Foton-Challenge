const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const { Resolver:resolvers } = require('./modules/user');
const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, "schemas", "graphql", "schema.graphql"),
    resolvers
});

server.start();