import express from 'express';
import passportAuth from '../authentication/passportAuth'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'jesEcom' });
});

module.exports = router;
