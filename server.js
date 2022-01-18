const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {GraphQLSchema} = require('graphql');


const {queryType} = require('./query.js');
const {mutationType} = require('./mutation.js');

const port = 5000;
const app = express();

 // Define the Schema
 const schema = new GraphQLSchema({ 
     query: queryType,
     mutation: mutationType 
});

app.get('/', (req,res) => {
    res.send("hello");
   }
);

//Setup the nodejs GraphQL server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));


app.listen(port);
console.log(`Server Running at localhost:${port}`);
