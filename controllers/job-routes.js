//dependcies
const sequelize = require('../config/connection');
const { Headhunter, Candidate, Resume, Job } = require('../Model');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        //get all jobs
        const jobData = await Job.findAll( {order: [['created_at', 'DESC']]});
        //serialize the data
        const jobs = jobData.map((job) => job.get({plain: true}));
        // render the dashboard view
        res.render('job-list', {
            jobs,
            logged_in: req.session.logged_in,
            logged_user: req.session.user_id,
            user_type: req.session.user_type,
             
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:job_id', async (req, res) => {
    try {
        //get job
        const jobData = await Job.findByPk(req.params.job_id);
        //serialize the data
        const job = jobData.get({plain: true});
        // render the dashboard view
        res.render('job-page', {
            job,
            logged_in: req.session.logged_in,
            logged_user: req.session.user_id,
            user_type: req.session.user_type
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/resume/:job_id', async (req, res) => {
    try {
        //get job
        const jobData = await Job.findByPk(req.params.job_id);
        //serialize the data
        const job = jobData.get({plain: true});
        //resume form
        res.render('new-resume', {
            job,
            logged_in: req.session.logged_in,
            logged_user: req.session.user_id,
            user_type: req.session.user_type
        }); 
    } catch (err) {
        res.status(500).json(err);
    }      
});

module.exports = router;