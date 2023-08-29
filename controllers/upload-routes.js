const router = require('express').Router();
const { Image } = require('../Model');
router.get('/', async (req, res) => {
    res.render('image',{
        logged_in: req.session.logged_in,
        logged_user: req.session.user_id, 
        user_type: req.session.user_type
    });    
});
module.exports = router;

