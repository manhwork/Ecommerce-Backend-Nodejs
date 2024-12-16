const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

// init middlewares
app.use(morgan("dev")); // Trả về phản hồi yêu cầu request
app.use(helmet()); // Ngăn chặn hacker biết được công nghệ mình đang sử dụng
app.use(compression()); // nến các request
// init db

// init routes
app.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "Welcom website",
    });
});
// handling error

module.exports = app;
