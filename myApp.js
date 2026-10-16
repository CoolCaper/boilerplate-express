function abs_path(path) {
    return __dirname + path;
}
let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(abs_path('/views/index.html'));
});




































 module.exports = app;
