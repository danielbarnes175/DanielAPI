'use strict'

const controller = require('./controller');
const routes = require('express').Router();

routes.get('/health', (req, res) => {
    res.json(200);
});

module.exports = routes;