const request = require("request");

function simpleGet (callback) {
  request (
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error,response,result) {
      callback(result);
      //console.log("result:", result); // Print the HTML for the Google homepage.
    }
  );
}

function simpleGetWithParams(callback) {
  request.get (
    "https://postman-echo.com/get?foo=bar&program=camp2&people[]=Frieda&people[]=Francis",
    function(error,response,result) {
      const resultparsed = JSON.parse(result);
      callback(resultparsed.args);
      //console.log("result:", result); // Print the HTML for the Google homepage.
    }
  );
}

function formatDate(date) {
    let month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();
    month = month.toString().padStart(2,"0"); // ou PadLeft
    day = day.toString().padStart(2,"0");
    return [year, month, day].join('-');
}

function validateTimestamp(callback) {
  request (
    {
      url: "https://postman-echo.com/time/valid?timestamp=" + formatDate(new Date()),
      method: "GET"
    },
    function(error,response,result) {
      callback(result);
      //console.log("result:", result); // Print the HTML for the Google homepage.
    }
  );
}

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
}
