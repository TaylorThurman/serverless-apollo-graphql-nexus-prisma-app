const {ApolloServer, gql} = require('apollo-server-lambda');
const schema = require("./schema");
const { createContext } = require('./context')

const server = new ApolloServer({
    context: createContext,
    schema: schema.schema,
    formatError: error => {
        return error;
    },
    formatResponse: response => {
        return response;
    },
    tracing: true,
    playground: true
});

exports.graphqlHandler = (event, context, callback) => {
    const handler = server.createHandler({
        cors: {
            origin: "*",
            credentials:true,
            methods:["POST","GET"],
            allowedHeaders: ["Content-Type", "Origin", "Accept"]
        }
    });
    return handler(event, context, callback);
};