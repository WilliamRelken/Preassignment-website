

module.exports = app => {
    app.get('/landing', (req, res) => {
        res.json({
                message: "hello yall"

        });
    });
}