var express = require('express');
var router = express.Router();
const fish_controlers= require('../controllers/fishes');

/* GET costumes */
router.get('/', fish_controlers.fish_view_all_Page );
module.exports = router;

/* GET detail fish page */
router.get('/detail', fish_controlers.fish_view_one_Page);

/* GET create fish page */
router.get('/create', fish_controlers.fish_create_Page);

/* GET create update page */
router.get('/update', fish_controlers.fish_update_Page);

/* GET create fish page */
router.get('/delete', fish_controlers.fish_delete_Page);





