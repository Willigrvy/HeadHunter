//dependcies
const sequelize = require('../config/connection');
const { Headhunter, Candidate, Resume, Job  } = require('../Model');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        //get all jobs
        const jobData = await Job.findAll({
            where:{
                headhunter_id: req.session.user_id
            },
        });
        //serialize the data
        const jobs = jobData.map((job) => Job.get({plain: true}));
        // render the dashboard view
        res.render('dashboard', {
            jobs,
            user_type: req.session.user_type,
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/job/:id', async (req, res) => {
    try {
        //get all candidates
        const candidateData = await Candidate.findAll({
            where:{
                job_id: req.params.id
            },
        });
        //serialize the data
        const candidates = candidateData.map((candidate) => candidate.get({plain: true}));
        // render the dashboard view
        res.render('candidate-list', {
            candidates,
            logged_in: req.session.logged_in,
            user_type: req.session.user_type
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/candidate/:id', async (req, res) => {
    try {
        //get one candidate
        const candidateData = await Candidate.findByPk(req.params.id,{
            include: [
                {
                  model: Resume,
                },
            ]
        });
        //serialize the data
        const candidate = candidateData.get({plain: true});
        // render the dashboard view
        res.render('candidate-page', {
            candidate,
            logged_in: req.session.logged_in,
            user_type: req.session.user_type
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new-job',  async (req, res) => {
    //new job form
    res.render('new-job');    
});


module.exports = router;