var express = require('express');

var app = express();

// Custom middleware
app.use(express.json());

app.use(express.urlencoded());

app.use(express.static(__dirname + "public"));

// Routing middleware
app.post('/json', (req, res) => {
    console.log(req.body);
})

app.post('/contact', (req, res) => {
    console.log(req.body);
})

app.get('/images/img1.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/images/img1.jpg');
})

// Server
app.listen(3000, () => {
    console.log(`Server 3000 is now live.`);
})