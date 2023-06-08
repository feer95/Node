const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Petición recibida por el cliente')
});

app.listen(3000);