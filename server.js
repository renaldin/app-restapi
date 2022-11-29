const express = require('express');
const bodyParser = require('body-parser');
let morgan = require('morgan');

const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// call routes 
let routes = require('./routes');
routes(app);

// daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(5000, () => {
    console.log(`Server started on 5000`);
});