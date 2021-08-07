

module.exports = app => {
    app.get('/landing', (req, res) => {
        res.send({
            welcome: "user",
            this: "is a landing page"
        });
    });
}