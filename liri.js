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

//spotify
var Spotify = require('node-spotify-api');

//access keys information like below
var spotify = new Spotify(keys.spotify);

//console.log("we ran our file");///and the functions for each of these to the if statement.  Could also do a switch case.
var userSearch = process.argv.slice(3).join(" ");

console.log(process.argv[2]);
if (process.argv[2] === "concert-this") {
    concertThis();
}
if (process.argv[2] === "spotify-this-song") {
    spotifyThis();
}
if (process.argv[2] === "movie-this") {
    movieThis();
}
if (process.argv[2] === "do-what-it-says") {
    doThis();
}

//movie-this will be similari
function concertThis() {
    //console.log("user wants to concert this");
    //console.log(userSearch)

    var queryURL = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp";

    //get data from concert this search and append to file
    axios.get(queryURL)
        .then(function (response) {
            console.log("Artist/Band Lineup: " + response.data[0].lineup);
            //console.log("Artist/Band Name: " + userSearch);
            console.log("Venue Name: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city + response.data[0].venue.region);
            var event = moment(response.data[0].datetime).format('MM/DD/YYYY');
            console.log("Concert Date: " + event);

            fs.appendFile('log.txt', "Artist/Band Lineup: " + response.data[0].lineup + '\n', function (err) {
                if (err) {
                    console.log(err)
                }
            });            
            fs.appendFile('log.txt', "Venue Name: " + response.data[0].venue.name + '\n', function (err) {
                if (err) {
                    console.log(err)
                }
            });
            fs.appendFile('log.txt', "Venue Location: " + response.data[0].venue.city + response.data[0].venue.region + '\n', function (err) {
                if (err) {
                    console.log(err)
                }
            });
            fs.appendFile('log.txt', "Concert Date: " + event + '\n', function (err) {
                if (err) {
                    console.log(err)
                }
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}


// Make a request for a user with a given ID
function movieThis() {
    //console.log("user wants to movie this");
    //console.log(userSearch)

    var queryURL = "http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy";

    if(userSearch === ""){
        console.log("Movie Title: Mr. Nobody");
        console.log("Movie Release Date: 2009");
        console.log("Rating: R");
        console.log("Rotten Tomatoes Rating: 63/100");
        console.log("Country: Belgium, Germany, Canada, France, USA, UK");
        console.log("Language: English, Mohawk");
        console.log("Movie Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.");
        console.log("Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham");
    }else{
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
    
                fs.appendFile('log.txt', "Movie Title: " + response.data.Title + '\n', function (err) {
                    if (err) {
                        console.log(err)
                    }
                });
                fs.appendFile('log.txt', "Movie Release Date: " + response.data.Year + '\n', function (err) {
                    if (err) {
                        console.log(err)
                    }
                });
                fs.appendFile('log.txt', "Rating: " + response.data.Rated + '\n', function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
                fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + response.data.Ratings[2].Value + '\n', function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
                fs.appendFile('log.txt', "Country: " + response.data.Country + '\n', function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
                fs.appendFile('log.txt', "Language: " + response.data.Language + '\n', function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
                fs.appendFile('log.txt', "Movie Plot: " + response.data.Plot + '\n', function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
                fs.appendFile('log.txt', "Actors: " + response.data.Actors + '\n', function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

}

function spotifyThis() {
 if(userSearch === ""){
     console.log("Artist: Ace of Base");
     console.log("Song Name: The Sign");
     console.log("Album Name: The sign");
     console.log("Preview Link: https://p.scdn.co/mp3-preview/4c463359f67dd3546db7294d236dd0ae991882ff?cid=1ab467d060ac4938a03318c506c13b02")
 }else{
     spotify.search({
         type: 'track',
         query: userSearch
     },
         function (err, data) {
             if (err) {
                 console.log('Error occurred: ' + err);
                 return;
             }
 
             var songResponse = data.tracks.items[0]
             //console.log(songResponse.artists);
             for (var i = 0; i < songResponse.artists.length; i++) {
                 console.log("Artist: " + songResponse.artists[i].name);
             }
             console.log("Song Name: " + songResponse.name);
             console.log("Album Name: " + songResponse.album.name);
             console.log("Preview Link: " + songResponse.preview_url);
 
            fs.appendFile('log.txt', "Artists: " + songResponse.artists[0].name + '\n', function (err) {
                 if (err) {
                     console.log(err)
                 }
             })
             fs.appendFile('log.txt', "Song Name: " + songResponse.name + '\n', function (err) {
                 if (err) {
                     console.log(err)
                 }
             })
             fs.appendFile('log.txt', "Album Name: " + songResponse.album.name + '\n', function (err) {
                 if (err) {
                     console.log(err)
                 }
             })
             fs.appendFile('log.txt', "Preview Link: " + songResponse.preview_url + '\n', function (err) {
                 if (err) {
                     console.log(err)
                 }
             })
 
         });
 }

}
function doThis() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
        var dataArr = data.split(",");
        console.log(dataArr);
    })
}