

const express = require("express");

const https = require("https");

const app = express(); 

app.get("/", function(req,res) {
    res.send("Server is up and running.")
})


const url = "https://api.openweathermap.org/data/2.5/weather?q=Austin,US&appid=APIKEY=metric"

https.get(url, (response) => {
    console.log(response);
})


app.listen(3000,function( )  {
    console.log("Sever is running on port 3000.");
})

.on('error', (error) => {
    console.log(error);
})