const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const session = require('express-session');
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 5000;

// Body Parser
app.use(bodyParser.json())

app.use('/users', require('./routes/users'));
app.use('/product', require('./routes/product'));

require('./google/index');
require('./facebook/index');

const db = require('./database/config');

db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))

app.listen(PORT, console.log("start..."));
