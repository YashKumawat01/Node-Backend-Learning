const http = require("http");
const fs = require("fs")
const url = require("url")



const myServer = http.createServer(myHandler)


myServer.listen(8000,()=>console.log("Server Started"))