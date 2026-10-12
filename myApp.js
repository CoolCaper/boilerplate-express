function abs_path(path) {
    return __dirname + path;
}
let express = require('express');
let app = express();

app.use(express.static(abs_path("/public")))

app.get('/', (req, res) => {
    res.sendFile(abs_path("/public"));
});



































 module.exports = app;
