const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/adminLogin", "/listvolunteers"],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
    );
};