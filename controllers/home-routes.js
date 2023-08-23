const sequelize = require('../config/connection');
const { } = require('../Model');
const router = require('express').Router();

//the home page
router.get('/', async (req, res) => {
    try {
       
        // render the homepage view
        res.render('homepage', {
            //insert passed on variables
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;