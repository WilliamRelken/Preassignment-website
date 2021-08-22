const express = require('express');
var cookieParser = require('cookie-parser');

require('../models/Admin');
require('../models/Volunteer');


module.exports = (app, Admins, Volunteers, cookieSession) => {

    app.use(cookieParser());

    // Parse URL-encoded bodies (as sent by HTML forms)
    app.use(express.urlencoded({
        extended: true
    }));

    // Parse JSON bodies (as sent by API clients)
    app.use(express.json());

        //find if user has acceptable cookie to get data
    app.get("/listvolunteers", function (req, res, next) {

        console.log("request status: " + req.statusCode + "\n response status: " + res.statusCode);

        //query database for matching user and pass
        Admins.findById(req.session.id)
            .then((result) => {

                if(JSON.stringify(result) != "[]"){

                    if (result._id == req.session.id) {
                        console.log("correct id: "+ req.session.id +" sending data.");

                        //database query, send back.
                        Volunteers.find()
                            .then((result2) => {
                                result = result2;
                                console.log(result);
                                res.send(result);
                            });

                    } else{
                        console.log("id issue\n id sent: " + req.session.id + "\n correct id: " + result._id);
                    }
                } else{
                    res.send();
                    console.log("incorrect id, redirecting.");
                }

            });
    });


}
