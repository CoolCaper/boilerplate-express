require('dotenv').config();

function abs_path(path) {
    return __dirname + path;
}
let express = require('express');
let app = express();
var env_reader = new FileReader();
env_reader.readAsText(abs_path('/Env.env'));

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log(process.env)
    res.sendFile(abs_path('/views/index.html'));
});

app.get('/json', (req, res) => {
    object = {"message" : "Hello json"}; 
    if (process.env.MESSAGE_STYLE == "uppercase") {
        console.log("Message style is set to uppercase!");
        object.message = object.message.toUpperCase();
    }
    res.json(object);
});



































 module.exports = app;
