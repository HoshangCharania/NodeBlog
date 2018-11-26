var express = require('express');
var router = express.Router();
var auth = require('../controllers/AuthController');

/* GET users listing. */

/** */
//router.get('/', users.index);
router.get('/', auth.login);
/* GET home page. */

module.exports = router;
