const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/rickandmorty')
mongoose.connection.once('open', () => {
    console.log('DB connected!');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening on port 3000');
}); 
