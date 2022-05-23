var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/new.html');
})

app.get('/post', (req, res) => {
    
})

app.listen(4000, () => {
    console.log(`Server 4000 is now live.`);
})