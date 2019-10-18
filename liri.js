//code to read and set environment variable
require("dotenv").config();

//require axios for movie and concert
var axios = require('axios');

//require momemt for date
var moment = require('moment');

//require fs
var fs = require('fs');

//code to require the keys.js file and store as a variable
var keys = require("./keys.js");

/*access keys information like below
var spotify = new Spotify(keys.spotify);*/

//console.log("we ran our file");///and the functions for each of these to the if statement.  Could also do a switch case.
var userSearch = process.argv.slice(3).join(" ");

console.log(process.argv[2]);
if(process.argv[2] === "concert-this"){
    concertThis();

}
if(process.argv[2] === "spotify-this-song"){
    console.log("user wants a song");
}
if(process.argv[2] === "movie-this"){
    movieThis();
}
if(process.argv[2] === "do-what-it-says"){
    console.log("user didn't enter a search item");
}

//movie-this will be similari
function concertThis(){
    console.log("user wants to concert this");
    console.log(userSearch)
    
    var queryURL = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp";
    
    //get data from concert this search and append to file
    axios.get(queryURL)
    .then(function (response) {
        
        console.log("Venue Name: " + response.data[0].venue.name);
        console.log("Venue Location: "+ response.data[0].venue.city + response.data[0].venue.region);
        var event = moment(response.data[0].datetime).format('MM/DD/YYYY');
        console.log("Concert Date: " + event);
    
        fs.appendFile('log.txt', "Venue Name: " + response.data[0].venue.name +'\n', function(err){
            if (err){
                console.log(err)
            }
        });
        fs.appendFile('log.txt', "Venue Location: " + response.data[0].venue.city + response.data[0].venue.region +'\n',function(err){
            if (err){
                console.log(err)
            }
        });
        fs.appendFile('log.txt', "Concert Date: " + event + '\n', function(err){
            if (err){
                console.log (err)
            }
        })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });  
}

 
// Make a request for a user with a given ID
function movieThis(){
    console.log("user wants to movie this");
    console.log(userSearch)
    
    var queryURL = "http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy";
    
    //get data from concert this search and append to file
    axios.get(queryURL)
    .then(function (response) {
        
        console.log("Movie Title: " + response.data.Title);
        console.log("Movie Release Date: " + response.data.Year);
        console.log("Rating: " + response.data.Rated);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[2].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Movie Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    
        fs.appendFile('log.txt', "Movie Title: " + response.data.Title +'\n', function(err){
            if (err){
                console.log(err)
            }
        });
        fs.appendFile('log.txt', "Movie Release Date: " + response.data.Year +'\n',function(err){
            if (err){
                console.log(err)
            }
        });
        fs.appendFile('log.txt', "Rating: " + response.data.Rated + '\n', function(err){
            if (err){
                console.log (err)
            }
        })
          fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + response.data.Ratings[2].Value + '\n', function(err){
            if (err){
                console.log (err)
            }
        })
          fs.appendFile('log.txt', "Country: " + response.data.Country + '\n', function(err){
            if (err){
                console.log (err)
            }
        })
        fs.appendFile('log.txt', "Language: " + response.data.Language + '\n', function(err){
            if (err){
                console.log (err)
            }
        })
        fs.appendFile('log.txt', "Movie Plot: " + response.data.Plot + '\n', function(err){
            if (err){
                console.log (err)
            }
        })
        fs.appendFile('log.txt', "Actors: " + response.data.Actors + '\n', function(err){
            if (err){
                console.log (err)
            }
        })
     })
  .catch(function (error) {
    // handle error
    console.log(error);
  });  
}