function h_get_abs_path(path) {
    abs_path = __dirname + path;
    return abs_path;
}

let express = require('express');
let app = express();
console.log("Hello, world!");
let absolutePath = h_get_abs_path("/views/index.html");
console.log(absolutePath);
app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

app.use(express.static())


































 module.exports = app;
