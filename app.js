
// Create server
// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log("request made");
// });
// server.listen(3000); // listen incoming reqest


// import the pacakages
var express = require('express')


// Configuration
app = express(); // execute entire express

var path = '/';

app.get(path, function(req, res){
    console.log("request was sent");
    res.send("hello");
});

var port = 3000;
app.listen(port, function(){
    console.log('server running on port ' + port);
})