

var PORT = 10865;

var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.static('bower_components'));
app.use(express.static('public'));

app.listen(PORT, function() {
	console.log('server started on port: ' + PORT);
});