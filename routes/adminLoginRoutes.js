const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
require('../models/Admin');


module.exports = (app, Admins, cookieSession) => {

    // Parse URL-encoded bodies (as sent by HTML forms)
    app.use(express.urlencoded({
        extended: true
    }));

    // Parse JSON bodies (as sent by API clients)
    app.use(express.json());

    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true
        })
    );



    app.post("/adminlogin", function (req, res, next) {

        console.log("request status: " + req.statusCode + "\n response status: " + res.statusCode);





        console.log(req.body.username);
        console.log(req.body.password);

        res.cookie(req.session.username = "howdy");
        res.send();

        console.log(res.cookie);

    });

    app.get('/adminlogin', (req, res) => {





        console.log("testing")

        Admins.find()
            .then((result) => {

                //converting result to a string to edit poor json formatting from mongoDB
                result = JSON.stringify(result);
                //removes [] sent by mongoDB
                result = result.slice(1, (result.length - 1));
                //converts back to JSON object
                result = JSON.parse(result);

                console.log(result);
                res.json(result);
            });

    });
}
