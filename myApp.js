function abs_path(path) {
    return __dirname + path;
}
let express = require('express');
let app = express();


app.get('/', (req, res) => {
    res.sendFile(abs_path("/views/index.html"));
});

app.use('/public', (req, res) => {
    express.static(__dirname + '/public');
})


































 module.exports = app;
