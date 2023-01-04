const express = require('express');
const colors = require('colors');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./Schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB();

app.use(
    '/graphql', 
    graphqlHTTP({
    schema,
    // graphiql: true,
    graphiql:  process.env.NODE_ENV === 'development'

 

}))
app.listen(port, console.log(`Server is running on port ${port}`))
// app.listen(5000,()=>{
//     console.log(`server is running at port 5000`)
// })
