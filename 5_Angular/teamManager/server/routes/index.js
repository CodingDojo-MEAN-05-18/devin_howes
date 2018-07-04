const playerRoute = require('./player.routes');
const router = require('express').Router();

module.exports = router.use('/players', playerRoute);