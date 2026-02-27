const http = require("http");

const express = require("express")


const app = express();

app.get('/',(req,res)=>{
  return res.send("Hello from HomePage")
})
app.get('/about',(req,res)=>{
  return res.send("Hello from About Page"+" Hey "+ req.query.name)
})
app.get('/contact',(req,res)=>{
  return res.send("Hello from Contact Page")
})


app.listen(8000,()=>console.log("Server Started"));

