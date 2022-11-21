let mysql = require('mysql');

// koneksi database 
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db-restapi'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql terkeneksi');
});

module.exports = conn;