var express = require("express");
var Api = express();

var port = 3000;
var host = "localhost";

Api.listen(port, host, ()=>{
    console.log("server running at http://%s:%d", host, port);
})

Api.get("/", (request, response)=>{
    console.log("I'm in get /");
    response.sendFile("frontend/index.html");
})