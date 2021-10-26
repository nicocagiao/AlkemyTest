const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require("cors");

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//routes

const allowedOrigins = ["http://localhost:3001"];

    app.use(
        cors({
            origin: function(origin, callback) {
                if (!origin) return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    var msg =
                        "The CORS policy for this site does not " +
                        "allow access from the specified Origin.";
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            }
        })
    ); 

    
const balanceRouter = require('./controllers/balanceController');
 

 
app.use('/', jsonParser, balanceRouter);

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
});