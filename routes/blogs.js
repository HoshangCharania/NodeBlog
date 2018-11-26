var express = require('express');
var router = express.Router();
var blogs = require('../controllers/BlogController');
var auth = require('../controllers/AuthController');

router.get('/view/:user_id',auth.isAuthenticated, blogs.view);
router.get('/add',auth.isAuthenticated, blogs.add);
router.post('/add',auth.isAuthenticated, blogs.createBlog);
router.get('/',auth.isAuthenticated, blogs.index);

module.exports = router;