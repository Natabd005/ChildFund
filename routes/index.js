var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('front-page/home', { title: 'Express' });
});
router.get('/login', (req, res, next) => {
  res.render('front-page/login', { title: 'Express',errors: {} })
})
router.get('/signup', (req, res, next) => {
  res.render('front-page/sign-up', { title: 'Express', errors: {} })
})
router.get('/dashboard', (req, res, next) => {
  res.render('dashboard/dashboard', { title: 'Express' })
})

module.exports = router;
