var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
//logs
var margan = require('morgan');
//mongodb driver
var mongoskin = require('mongoskin');
var database = require('./config/db');
var db = mongoskin.db(database.url,{native_parser:true});

var port = process.env.PORT || 8088;
//serve static directory 
app.use(exress.static(path.join(__dirname,'public')));
app.use(margan('dev'));
//parse request bodies (req.body)
app.use(bodyParser.urlencoded({'extended':'true'}))
//allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));




app.listen(port);
console.log('my app listen port ',port);