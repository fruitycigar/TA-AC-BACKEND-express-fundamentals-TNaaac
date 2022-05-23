var express = require('express');

var app = express();

// custom middleware
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/new.html');
})

app.post('/new', (req, res) => {
    res.send(req.body);
})

app.get('/users/:username', (req, res) => {
    var username = req.params.username;
    res.send(username);
})

app.listen(4000, () => {
    console.log(`Server 4000 is now live.`);
})