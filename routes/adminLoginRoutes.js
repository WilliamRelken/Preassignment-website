const mongoose = require('mongoose');

require('../models/Admin');

module.exports = (app, Admins) => {
    app.get('/adminlogin', (req, res) => {

        var array;

        array = Admins.find()
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
