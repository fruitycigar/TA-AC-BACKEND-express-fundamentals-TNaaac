var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(cookieParser());

// custom middleware

app.use(logger('combined'));

app.use((req, res, next) => {
    console.log(req.cookies);
    next();
})

app.use('/about', (req, res, next) => {
    res.cookie('username', 'shruthisagar');
    res.end('This is our about page.');
})

// Routing Middleware
app.get('/', (req, res) => {
    res.end('Welcome to your first custom middleware');
})

app.listen(2222, () => {
    console.log(`Server is now listening on Port 2222.`);
})

