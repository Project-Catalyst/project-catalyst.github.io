const {GraphQLClient} = require("graphql-request")

function createGqlClient() {
  return new GraphQLClient(process.env.WIKIJS_GRAPHQL_ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.WIKIJS_API_TOKEN}`,
    },
  })
}

module.exports = {createGqlClient}
