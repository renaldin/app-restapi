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

// add student data 
exports.addStudentData = function (req, res) {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) Values (?,?,?)', [nim, nama, jurusan], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok('Add Data Successfully', res);
        }
    });
};

// update data by id
exports.updateStudentData = function (req, res) {
    let id = req.body.id_mahasiswa;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Update Data Succesfully", res);
        }
    });
};

// delete stuednt data 
exports.deleteStudent = function (req, res) {
    let id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id], function (error, rows, fiels) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Delete Data Succesfully", res);
        }
    });
};

// show matakuliah group
exports.showGroupMatakuliah = function (req, res) {
    connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.oknested(rows, res);
        }
    })
}