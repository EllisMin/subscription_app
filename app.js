// import the pacakages
var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'subscription_db'
});

// Configuration
var app = express(); // execute entire express

var path = '/';
app.get(path, function(req, res){
    console.log("request was sent");
    res.send("hello");
});

var port = 3000;
app.listen(port, function(){
    console.log('server running on port ' + port);
})