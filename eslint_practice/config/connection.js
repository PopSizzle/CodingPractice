const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'password',
  database: 'my_db',
});
