const router = require('express').Router();
const path = require('path');

router.all('*', function(_request, response) {
  response.sendFile(path.resolve('dist/bicycleMarketplace/index.html'));
});

module.exports = router;