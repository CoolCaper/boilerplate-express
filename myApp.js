function abs_path(path) {
    return __dirname + path;
}
let express = require('express');
let app = express();


app.get('/', (req, res) => {
    app.use(express.static(abs_path("/public")))
    res.sendFile(abs_path("/views/index.html"));
});



































 module.exports = app;
