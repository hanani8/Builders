var express = require('express');
var router = express.Router();
var post = require('../models/post');
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.links);

//router.post('/', indexController.user);

//router.post('/', indexController.saveComments)

//router.post('/', indexController.comments);


module.exports = router;