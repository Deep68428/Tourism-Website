const mongoose = require('mongoose');

// var mongoURL = "mongodb+srv://manoj:kumar@cluster0.ih09tiq.mongodb.net/travels";

var mongoURL = "mongodb+srv://jaypatel12209:jay12209@cluster0.gcvyqqj.mongodb.net/travels";


mongoose.connect(mongoURL, {useUnifiedTopology : true , useNewUrlParser:true} )

var connection = mongoose.connection

connection.on("error", ()=>{
    console.log("Mongo DB connection failed");
})
connection.on("connected" , ()=>{
    console.log("mongo DB connection Successfull !");
})

module.exports = mongoose;