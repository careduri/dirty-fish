
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'UML Editor', });
});



router.get('/about', function(req, res) {
  res.render('about', { title: 'About Us' });
});
router.get('/buttons', function(req, res) {
  res.render('buttons', { title: 'Buttons' });
});




module.exports = router;
