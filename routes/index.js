const express = require('express');
const routes = express.Router();

routes.get('/', function (req, res, next) {
    res.render('index.html');
});

module.exports = routes;