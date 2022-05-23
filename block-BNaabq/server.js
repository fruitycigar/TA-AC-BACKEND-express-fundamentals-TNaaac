var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.use((req, res, next) => {
    
})

app.listen(2222, () => {
    console.log(`Server is now listening on Port 2222.`);
})

