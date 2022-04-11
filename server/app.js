//import express, morgan and axios using require
const express = require('express');
const morgan = require("morgan");
const axios = require('axios').default;
//allows me to use environmental variables
require('dotenv').config();
//set up express server
const app = express();
// add your routes and middleware below
app.use(morgan("dev"));

let movieObj = {};

app.get("/", function(req, res) {
    console.log("req.url", req.url)
    //if user does not enter a movie ID or title parameter then respond with directions on how to access movie data
    if (req.url == "/"){
        res.status(200).send("enter movie ID or title parameter after the / in the url");
    } else if (movieObj.hasOwnProperty(req.url)){
        console.log("sending data from cache", movieObj[req.url])
        console.log("movieObj in if", movieObj);
        // respond with data from cache if the req.url already exists as a key within movieObj 
        res.send(movieObj[req.url]);
    } else {
        axios({
            method:"get",
            // When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter
            url: `http://www.omdbapi.com${req.url}&apikey=${process.env.REACT_APP_API_KEY}`,
        })
            .then((result) => {
                //make API call if it is a new request
                movieObj[req.url] = result.data;
                console.log("sending api call")
                console.log("movieObj in else", movieObj);
                res.send(result.data);
            })
            .catch((error) => {
                console.error(error);
                res.send('An error occured.');
            })
    }
    
});

module.exports = app;