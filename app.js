const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('INDEX'));

// Body Parser
app.use(bodyParser.json());

// User
app.use('/users', require('./routes/users'));

//Product
app.use('/product', require('./routes/product'));

//Database
const db = require('./database/config');

// Test DB
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))

app.listen(PORT, console.log("start..."));
