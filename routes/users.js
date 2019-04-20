const express = require('express');
const routes = express.Router();

routes.get('/users', function (req, res, next) {
    res.send('test works');
});

module.exports = routes;