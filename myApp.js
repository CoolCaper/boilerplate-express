let express = require('express');
let app = express();
console.log("Hello, world!");
app.get('/root', (req, res) => {
    res.send("Hello, Express")
});

































 module.exports = app;
