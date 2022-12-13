const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);

  var result = n1 + n2;

  res.send("The result of the calculation is"+ result);
});

app.get("/BMICalculator",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app,post("/BMICalculator",function(req,res){
  var num3 = Number(req.Height.heigth);
  var num4 = Number(req.Weight.weigth);

  var bmi = num4/(num3*num4);
  res.send("The bmi of the Given data is " + bm1);
})
app.listen(3000,function(){
  console.log("Server created");
});
