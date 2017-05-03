var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ttads',
  password : 'maria',
  database : 'ttads'
});

connection.query('SELECT id, name from client', function (error, results, fields) {
  if (error) throw error;
  results.forEach(row => {
    console.log(row.id+" - "+row['name']);
  })
});

connection.end();
