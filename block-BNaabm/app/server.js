var express = require('express');

var app = express();

// Custom middleware
app.use("/", (req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.listen(3000, () => {
    console.log(`Server is now live on Port 3000.`);
})