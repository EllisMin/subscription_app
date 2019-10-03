// import the pacakages
var express = require('express');
var mysql = require('mysql');
var bodyParser = require("body-parser");


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'subscription_db'
});

// Configuration
var app = express(); // execute entire express
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var path = '/';
app.get(path, function(req, res){
    console.log("request was sent");

    // Get # users from query
    var q = 'SELECT COUNT(*) AS total FROM users';
    connection.query(q, function(error, results, fields) {
        if (error) throw error;
        var num_users = results[0].total;
        res.render('home', {num: num_users});
    });
});

app.post('/register', function(req, res){
   var person = {
        email: req.body.email
   };
   connection.query('INSERT INTO users SET ?', person, function(err, result) {
        if(err) throw err;
        res.redirect('/');
   });
});


var port = 3000;
app.listen(port, function(){
    console.log('server running on port ' + port);
})