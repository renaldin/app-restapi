const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// call routes 
let routes = require('./routes');
routes(app);

app.listen(5000, () => {
    console.log(`Server started on 5000`);
});