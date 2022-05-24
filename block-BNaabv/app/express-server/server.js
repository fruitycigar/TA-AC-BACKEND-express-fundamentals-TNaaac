var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middlewares
app.use(logger('dev'));

app.use(cookieParser());

app.use('/about', (req, res, next) => {
    res.cookie('love', 'none');
    res.send(`Is it lover?`);
})

app.use('/admin', (req, res, next) => {
    next('Access withheld');
})

// routes
app.get('/', (req, res) => {
    res.send(`<h2>Welcome to express</h2>`);
})

app.get('about', (req, res) => {
    res.send(`My name is qwerty.`);
})

app.post('/form', (req, res) => {
    res.json(req.body);
})

app.post('/json', (req, res) => {
    res.send(req.body);
})

app.get('/users/:username', (req, res) => {
    var user = req.params.username;
    res.send(`<h1>${user}</h1>`);
})

// error handler
app.use((req, res, next) => {
    res.status = 404;
    res.send(`Page not found, wench!`);
})

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

app.listen(3333, () => {
    console.log(`Server 3333 is now live.`);
})