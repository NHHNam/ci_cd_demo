const express = require('express');
const app = express();

// add body-parser
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    return res.json({
        code: 200,
        message: "Hello world"
    })
});

app.get('/status', (req, res) => {
    return res.json({
        code: 200,
        message: "All thing is good",
        metadata: [
            {
                status: "OK",
                version: "1.0.0"
            },
            {
                status: "OK",
                version: "1.0.1"
            },
            {
                status: "OK",
                version: "1.0.2"
            }
        ]
    })
})

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});


// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

module.exports = app;