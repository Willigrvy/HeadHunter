//dependcies
const sequelize = require('../config/connection');
const { Headhunter, Candidate, Resume, Job } = require('../Model');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        //get all jobs
        const jobData = await Job.findAll();
        //serialize the data
        const jobs = jobData.map((job) => Job.get({plain: true}));
        // render the dashboard view
        res.render('job-list', {
            jobs,
            logged_in: req.session.logged_in,
            user_type: req.session.user_type 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/job/:id', async (req, res) => {
    try {
        //get job
        const jobData = await Job.findByPk(req.params.id);
        //serialize the data
        const job = jobData.get({plain: true});
        // render the dashboard view
        res.render('job-page', {
            job,
            logged_in: req.session.logged_in,
            user_type: req.session.user_type
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/resume/:id', withAuth, async (req, res) => {
    //resume form
    res.render('new-resume');    
});

module.exports = router;