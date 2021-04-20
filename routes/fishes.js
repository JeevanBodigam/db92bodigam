var express = require('express');
var router = express.Router();
const fish_controlers= require('../controllers/fishes');

/* GET costumes */
router.get('/', fish_controlers.fish_view_all_Page );


/* GET detail fish page */
router.get('/detail', fish_controlers.fish_view_one_Page);

/* GET create fish page */
router.get('/create', fish_controlers.fish_create_Page);
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET create update page */
router.get('/update', secured,fish_controlers.fish_update_Page);



/* GET create fish page */
router.get('/delete', fish_controlers.fish_delete_Page);

module.exports = router;





