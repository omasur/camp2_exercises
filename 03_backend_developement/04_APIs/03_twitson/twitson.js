const OAuth = require("OAuth");
const request = require("request");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);

// Put the express, port and OAuth initialization here...
const url1 = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

// Again, replace string by your credentials.
oauth.get(url1 + "Valeurs", process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
  // in your OAuth.get callback...
  if (error) {
    console.log(error);
  }
  else {
    JSON.parse(data).forEach(function(element) {
      const watsonResponse = watson(element.text, console.log);
    });
  }
});


function watson (txt, callback) {

  // Replace string with correct credentials
  const username = process.env.WATSON_USERNAME;
  const password = process.env.WATSON_KEY;
  const url = process.env.WATSON_URL;
  const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

  // const txt = "Welcom to the hotel California";
  const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + txt);
  request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
    const response1 = JSON.parse(body).sentiment.document.label;
    callback(txt, "  =>  ", response1);
  });
}

//Penser à faire source .env_var
