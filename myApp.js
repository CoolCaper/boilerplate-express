require('dotenv').config();

function abs_path(path) {
    return __dirname + path;
}
let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(abs_path('/views/index.html'));
});

app.get('/json', (req, res) => {
    object = {"message" : "Hello json"}; 
    if (process.env.MESSAGE_STYLE == "uppercase") {
        object.message = object.message.toUpperCase()
    }
    res.json(object);
});



































 module.exports = app;
