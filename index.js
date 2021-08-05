const express = require('express');
const app = express();

app.get('/adminlogin', (req, res) => {
    res.send({
        hi: "there",
        how: "are you"
    });
});

app.get('/', (req, res) => {
    res.send({
        hi: "there",
        how: "are you"
    });
});

//if heroku doesnt specify port then set to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);