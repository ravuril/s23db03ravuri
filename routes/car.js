var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('car', { title: 'Search Results Car' });
});

var express = require('express');
const car_controlers= require('../controllers/car');
var router = express.Router();
/* GET car */
router.get('/', car_controlers.car_view_all_Page );
module.exports = router;


module.exports = router;
