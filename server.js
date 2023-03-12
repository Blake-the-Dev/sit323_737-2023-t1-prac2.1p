var express = require('express');
var app = express();

app.get('/', function (req,res)
{
    res.send('Hello!');
    console.log('Hello!');
})

app.listen(3000);