require("dotenv").config();
function inputValidation(req, res, next) {
  if (!req.body.text) {
    // check for input validation
    return res.status(400).json({
      message: "Invalid input",
    });
  }
  return next();
}

// function handlePost(req, res, next) {
//   var aylien = require("aylien_textapi");
//   // Aylien API credentias load app_id and app_key from .env file
//   // Please make sure to carate an account in aylian and obtain your own app_id and app_key
//   // then create a .env file and set it.
//   var textapi = new aylien({
//     application_id: process.env.API_ID,
//     application_key: process.env.API_KEY,
//   });
//   textapi.sentiment(
//     {
//       url: req.body.text,
//     },
//     function (error, response) {
//       res.send(response);
//     }
//   );
// }
// exports.inputValidation = inputValidation;
// exports.handlePost = handlePost;

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

function getArticle(req, res) {
    textapi.sentiment({
            url: req.body.url
        },
        function(error, response) {
            res.send(response);
        }
    );
}

function getText(req, res) {
    textapi.sentiment({
            text: req.body.url
        },
        function(error, response) {
            res.send(response);
        }
    );
}


exports.getArticle = getArticle;
exports.getText = getText;
