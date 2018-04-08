require("dotenv").config();

var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require('request');
var fs = require("fs");


var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var action = process.argv[2];
var content = process.argv[3];
var logFile = "log.txt";

switch (action) {
    case "my-tweets":
        twitter();
        break;

    case "spotify-this-song":
        spotifyThis(content);
        break;

    case "movie-this":
        movieThis(content);
        break;

    case "do-what-it-says":
        random();
        break;
}

function twitter() {
    client.get('statuses/user_timeline', {
        count: 20
    }, function (error, tweets, response) {
        if (error) throw error;
        for (i in tweets) {
            logActivity(tweets[i].created_at + '\n' + tweets[i].text);
        }
    });
}

function spotifyThis(song) {
    if (song) {
        spotify.search({
            type: 'track',
            query: song,
            limit: 1
        }, function (err, data) {
            if (err) {
                return logActivity('Error occurred: ' + err);
            }
            // * Artist(s)
            logActivity("The artist name is: " + data.tracks.items[0].artists[0].name);

            // * The album's name
            logActivity("The album name is: " + data.tracks.items[0].album.name);

            // * A preview link of the song from Spotify
            logActivity("The preview link is: " + data.tracks.items[0].preview_url);

            // * The song that the song is from
            logActivity("The song name is: " + data.tracks.items[0].name);

        });
    } else {
        spotify.search({
            type: 'track',
            query: "artist%3AAce%20of%20Base%20+track%3AThe%20Sign",
            limit: 1
        }, function (err, data) {
            if (err) {
                return logActivity('Error occurred: ' + err);
            }
            // * Artist(s)
            logActivity("The artist's name is: " + data.tracks.items[0].artists[0].name);

            // * The album's name
            logActivity("The album name is: " + data.tracks.items[0].album.name);

            // * A preview link of the song from Spotify
            logActivity("The preview link is: " + data.tracks.items[0].preview_url);

            // * The song that the song is from
            logActivity("The song name is: " + data.tracks.items[0].name);

        });
    }
}

function movieThis(movie) {
   
    if (!movie) { 
        movie="Mr. Nobody.";
    };

    var queryUrl = "http://www.omdbapi.com/?t=" + encodeURI(movie) + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            logActivity("The title of the movie is: " + JSON.parse(body).Title);
            logActivity("Release Year: " + JSON.parse(body).Year);
            logActivity("IMDB Rating: " + JSON.parse(body).imdbRating);
            logActivity("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            logActivity("Produced in: " + JSON.parse(body).Country);
            logActivity("Language of the movie: " + JSON.parse(body).Language);
            logActivity("Plot of the movie: " + JSON.parse(body).Plot);
            logActivity("Actors in the movie: " + JSON.parse(body).Actors);
        }
        else if (error) {
            return logActivity(error);
          }
    });
}

function random(){

    fs.readFile("random.txt","utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return logActivity(error);
        }
      
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        var action = dataArr[0];
        var content = dataArr[1];

        switch (action) {
            case "my-tweets":
                twitter();
                break;
        
            case "spotify-this-song":
                spotifyThis(content);
                break;
        
            case "movie-this":
                movieThis(content);
                break;
        }
      
      });

}

function logActivity(logItem) {

    console.log(logItem);
    
    fs.appendFile(logFile, logItem+"\n", function(err) {

        // If an error was experienced we say it.
        if (err) {
            console.log(err);
        }

    });
}
