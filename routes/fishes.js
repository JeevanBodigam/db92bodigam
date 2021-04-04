var express = require('express');
var router = express.Router();
const fish_controlers= require('../controllers/fishes');

/* GET costumes */
router.get('/', fish_controlers.fish_view_all_Page );
module.exports = router;

