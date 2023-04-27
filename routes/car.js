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

/* GET detail car page */
router.get('/detail', car_controlers.car_view_one_Page);

/* GET create costume page */
router.get('/create', car_controlers.car_create_Page);
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
      return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }

/* GET create update page */
router.get('/update',secured,car_controlers.car_update_Page);
/* GET delete costume page */
router.get('/delete', car_controlers.car_delete_Page);

module.exports = router;