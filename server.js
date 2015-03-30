var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
//logs
var margan = require('morgan');
//mongodb driver
var mongoskin = require('mongoskin');


var port = process.env.PORT || 8088;
//serve static directory 
app.use(exress.static(path.join(__dirname,'public')));


app.listen(port);
console.log('my app listen port ',port);