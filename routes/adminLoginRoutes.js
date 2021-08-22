const bodyParser = require('body-parser');
const express = require('express');

require('../models/Admin');

module.exports = (app, Admins, cookieSession) => {

    // Parse URL-encoded bodies (as sent by HTML forms)
    app.use(express.urlencoded({
        extended: true
    }));

    // Parse JSON bodies (as sent by API clients)
    app.use(express.json());

    app.post("/adminlogin", function (req, res, next) {

        console.log("request status: " + req.statusCode + "\n response status: " + res.statusCode);

        //query database for matching user and pass
        Admins.find({ username: req.body.username})
            .then((result) => {

                if(JSON.stringify(result) != "[]"){
                    //converting result to a string to edit poor json formatting from mongoDB
                    result = JSON.stringify(result);
                    //removes [] sent by mongoDB
                    result = result.slice(1, (result.length - 1));
                    //converts back to JSON object
                    result = JSON.parse(result);

                    if (result.username == req.body.username && result.password == req.body.password) {
                        console.log("user id found: " + result._id);

                        res.cookie("id", (req.session.id = result._id));
                        res.cookie("username", (req.session.username = result.username));

                        res.send();
                    } else{

                        res.cookie("id", "");
                        res.send();
                        console.log("user found but incorrect password.");
                    }

                } else{
                    res.cookie("id", "");
                    res.send();
                    console.log("no user found in search.");
                }

            });

    });

}
