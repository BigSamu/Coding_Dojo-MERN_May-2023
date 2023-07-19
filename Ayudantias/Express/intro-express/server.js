var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});

app.listen(8080, () => {
    console.log("Nuestro primer servidor está funcionando");
})
