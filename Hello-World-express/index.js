const express = require("express");

const port  = 3000;

const app = express();

app.get('/',(req,res)=>{
  res.send("Hello World By using Express Framework")
})

app.listen(port,()=>{
  console.log(`app listening on port : ${port}`)
})