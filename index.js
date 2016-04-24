var express = require('express');
var GraphHTTP = require('express-graphql');
var Schema = require('./schema');

// Config
var APP_PORT = 3000;

// Start
var app = express();

// GraphQL
app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

app.listen(APP_PORT, ()=> {
  console.log(`App listening on port ${APP_PORT}`);
});