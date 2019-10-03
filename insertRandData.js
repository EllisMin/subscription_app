var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database: 'subscription_db'
});

var ppl =[];
var num_add = 500;

for (i = 0; i < num_add; i++){
    ppl.push([
            faker.internet.email(),
            faker.date.past()
        ]);
}
console.log(ppl); /// check data

var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [ppl], function(err, results) {
    console.log(err);
    console.log(results);
});

// end connection
connection.end()