// require
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
    res.send(`This is why I'm hot.`);
})

app.get('/users', (req, res) => {
    res.send(`I'm hot 'cause I'm fly, you ain't 'cause you not.`);
})

// Error handlers

app.use((req, res, next) => {
    res.send(`Hey you, you shouldn't be here.`);
})

app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(4000, () => {
    console.log(`Agent 4000 is now live.`);
})