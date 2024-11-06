/*
https://www.youtube.com/watch?v=mDgKjb5eWPk
*/

var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());


//kita ni sir pass hahah
var CONNECTION_STRING="mongodb+srv://admin:vymfIk5hisretypzov@bread.t5f5e.mongodb.net/?retryWrites=true&w=majority&appName=Bread";

var DATABASE="BillingAddress"
var database;

app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
    console.log("SUCCESS");
    })
})

