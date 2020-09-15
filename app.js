const express = require('express')
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT);