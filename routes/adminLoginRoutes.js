
module.exports = app => {
    app.get('/adminlogin', (req, res) => {
        res.send({
            admin: "user",
            login: "pass"
        });
    });
}
