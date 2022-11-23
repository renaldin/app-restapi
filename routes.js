'use strict';

module.exports = function (app) {
    let jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/show')
        .get(jsonku.showAllStudent);

    app.route('/show/:id')
        .get(jsonku.showAllStudentById);
    app.route('/add')
        .post(jsonku.addStudentData);
};
