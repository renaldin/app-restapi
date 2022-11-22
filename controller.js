'use strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Rest Api ku berjalan", res)
}

// show all student data 

exports.showAllStudent = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// show all student data by id 
exports.showAllStudentById = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};