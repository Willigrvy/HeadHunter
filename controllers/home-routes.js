const sequelize = require('../config/connection');
const { Headhunter } = require('../Model');
const router = require('express').Router();

//the home page
router.get('/', async (req, res) => {
    try {
        const headhunterData = await Headhunter.findAll();
        //serialize the data
        const headhunters = headhunterData.map((headhunter) => headhunter.get({plain: true}));
        // render the homepage view
        res.render('homepage', {
            //passed on variables
            headhunters,
            logged_in: req.session.logged_in, 
            user_type: req.session.user_type
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