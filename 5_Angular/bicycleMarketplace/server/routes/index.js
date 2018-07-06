const authRoutes = require('./auth.routes');
const bikeRoutes = require('./bike.routes');
const router = require('express').Router();

module.exports = router
    .use('/auth', authRoutes)
    .use('/bikes', bikeRoutes);