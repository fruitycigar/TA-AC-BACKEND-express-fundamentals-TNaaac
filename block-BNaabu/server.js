var express = require('express');
var app = express();

// routing middleware
app.get('/', (req, res) => {
    res.send(`GEDDIT.`);
})

app.get('/about', (req, res) => {
    res.send(`This is the about page.`);
})

app.get('/admin', (req, res, next) => {
    next('Access denied.');
})

// Error handlers
app.use((req, res, next) => {
    res.send(`Page not Found, my friend.`);
})

app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(1111, () => {
    console.log(`Server 1111 is now live.`);
})