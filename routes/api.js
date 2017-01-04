let express = require('express');
let router = express.Router();
let Mock = require('mockjs');


const listsData = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
})




router.get('/list', function (req, res, next) {
  res.json(listsData);
});

router.get('/pageList', function (req, res, next) {
  res.json(listsData);
});

module.exports = router;