const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const app = express();
const Admins = require('./models/Admin');

app.set('trust proxy', 1);

app.use(
    cookieSession({
        name: 'session',
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

app.use(express.static(path.resolve(__dirname, './client/build')));

//grabs the route files and immediately passes the express variable
require('./routes/landing')(app);
require('./routes/adminLoginRoutes')(app, Admins, cookieSession);



app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

//if heroku doesnt specify port then set to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);


