

const express = require("express");

const https = require("https");

const magic_key = process.env.API_KEY;

const app = express(); 

require('dotenv').config();

app.get("/", function(req,res) {

const url = "https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=${magic_key}&units=metric"

https.get(url, (response) => {
    console.log(response.statusCode);

response.on('data',function(data){
    const weatherData = JSON.parse(data)
    console.log(weatherData);
    })
})


res.send("Server is up and running") 
})

app.listen(3000,function( )  {
    console.log("Sever is running on port 3000.");
})

