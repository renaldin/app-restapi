'use strict';

module.exports = function(app){
    let jsonku = require('./controller');

    app.router('/')
        .get(jsonku.index);
}
