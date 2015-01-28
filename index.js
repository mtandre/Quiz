var open = require('open');
var express = require('express');
var http = require('http');

var app = express();
var httpServer = http.Server(app);

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);

open('http://localhost:3000/');

console.log("listening on port 3000");
