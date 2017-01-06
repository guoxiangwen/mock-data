let express = require('express');
let router = express.Router();
let Mock = require('mockjs');







router.get('/list', function (req, res, next) {
  const listsData = Mock.mock({
    'list|0-10': [{
      'id|+1': 1,
      'name': '@name',
      'email': '@email'
    }],
    'total|2-15': 5
  })
  res.json(listsData);
  res.end();
});

router.get('/pageList', function (req, res, next) {
  res.json(listsData);
});

module.exports = router;