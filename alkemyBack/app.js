const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
require('dotenv').config()

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//routes

const balanceRouter = require('./controllers/balanceController');
 

 
app.use('/', jsonParser, balanceRouter);

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
});