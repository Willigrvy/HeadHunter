const router = require('express').Router();
const { Image } = require('../Model');
router.get('/', async (req, res) => {
    res.render('image');    
});
module.exports = router;

