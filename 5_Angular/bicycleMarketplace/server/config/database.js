const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// regex match.js file ext case insensitive
const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost:27017/bikeMarketplace', { useNewUrlParser: true});
// tell us when mongodb is connected:
mongoose.connection.on('connected', () =>
  console.log('Connected to MongoDB bicycleMarketplace')
);


mongoose.Promise = global.Promise;

// use synchronous for this config
fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});