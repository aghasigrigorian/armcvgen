// Hello World
// console.log("Hello World");
var myClass = require('./newFolder');
var http = require('http').Server(app);
var express = require('express');
var b_parser = require('body-parser');
var app = express();


app.use(express.static(__dirname + '/../'));
// app.use(b_parser);
app.use(b_parser.urlencoded({ extended: false }))


app.get('/', function (req, res) {
	console.log('in a folder');
  res.sendFile('index.html');
});
app.post('/', function (req, res) {
	console.log("req.body.firstname", req.body);
	console.log("__dirname", __dirname);
	res.sendFile('success.html', {root: __dirname + '/../'});
})


app.listen(8080, function() {
	console.log("listening on port 8080")
} );