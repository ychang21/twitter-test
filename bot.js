//global variables
var twitter = require('twitter');
var fs = require('fs');
var keys = require('./keys.js');

var hashtag = process.argv[2];
var value = process.argv;

    if((hashtag === "") || (hashtag === undefined)){
        console.log("Don't forget to write a hashtag subject");
    } else {
        var client = new twitter(keys.twitterKeys);
        var params = {q: "%23" + hashtag, lang: "en", count: 3};
        client.get('search/tweets', params, function(error, tweets, response) {
            if (!error) {
            // console.log(JSON.stringify(tweets.statuses[0], undefined, 4));
            for (var i = 0; i<=2; i++) {
                console.log(tweets.statuses[i].user.screen_name + "\n" + tweets.statuses[i].created_at + ": " + tweets.statuses[i].text + "\n");
                console.log("------------------------------");
                fs.appendFile('log.txt', tweets.statuses[i].user.screen_name + "\n" + tweets.statuses[i].created_at + ": " + tweets.statuses[i].text + "\n" + "----------------------------------------------");
                }
            }
        });
    }
