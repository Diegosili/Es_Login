var express = require("express");
var cors = require("cors");
var Api = express();

Api.use(cors());

var port = 3000;
var host = "localhost";

Api.listen(port, host, ()=>{
    console.log("server running at http://%s:%d", host, port);
})

Api.get("/", (request, response)=>{
    console.log("I'm in get /");
    response.sendFile("frontend/index.html", {root:Path.join("/backend")});
})