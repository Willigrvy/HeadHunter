const sequelize = require('../config/connection');
const { } = require('../Model');
const router = require('express').Router();

//the home page
router.get('/', async (req, res) => {
    try {
       
        // render the homepage view
        res.render('homepage', {
            //insert passed on variables
            test:"insert"
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//the login page
router.get('/login', async (req, res) => {
    res.render('login');    
});

module.exports = router;