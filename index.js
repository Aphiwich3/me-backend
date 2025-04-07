var express = require('express')
var cors = require('cors')
var app = express()
const mysql = require('mysql2');
require('dotenv').config()


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

app.use(cors())

app.get('/hello', function (req, res, next) {
  res.json({msg: 'test'})
})

app.get('/users', function (req, res, next) {
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            res.json(results)
        }
      );
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})