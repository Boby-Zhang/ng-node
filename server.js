var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
//logs
var margan = require('morgan');
var database = require('./config/database');
//mongodb driver
var mongoose = require('mongoose');
mongoose.connect(database.url);//connect to mongodb
//var mongoskin = require('mongoskin');
//var db = mongoskin.db(database.url,{native_parser:true});

var port = process.env.PORT || 8088;
//serve static directory 
app.use(express.static(path.join(__dirname,'public')));
app.use(margan('dev'));
//parse request bodies (req.body)
app.use(bodyParser.urlencoded({'extended':'true'}));//parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //parse application/json
app.use(bodyParser.json({type:'appliction/vnd.api+json'}));//parse application/vnd.api+json as json
//allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method-Override'));//override with the X-HTTP-Method-Override header in the request

require('./app/routes.js')(app);//pass our application into our routes

app.listen(port);
console.log('my app listen port ',port);
































