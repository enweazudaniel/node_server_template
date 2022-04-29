const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req,res){
  res.send("<h1>hello</h1>");
});
app.get("/contactme", function(req,res){
  res.send("<h1>contact me at: enweazudaniel@gmail.com</h1>");
});
app.get("/about", function(req,res){
  res.send("<h1>I am Daniel</h1>");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("You are now live");
});
