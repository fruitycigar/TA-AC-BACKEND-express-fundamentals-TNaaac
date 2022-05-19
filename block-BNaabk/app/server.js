var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send(`Welcome to primetime, bitch!`);
})

app.listen(3000, () => {
    console.log('Server is eavesdropping on Port 3000.')
})