//dependcies
const sequelize = require('../config/connection');
const { headhunters, candidates, resume, job } = require('../Model');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', withAuth, async (req, res) => {
    try {
        //get all jobs
        const jobData = await Job.findAll({
            where:{
                headhunter_id: req.session.user_id
            },
        });
        //serialize the data
        const jobs = jobData.map((job) => job.get({plain: true}));
        // render the dashboard view
        res.render('dashboard', {
            jobs,
            logged_user: req.session.user_id,
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/job/:id', withAuth, async (req, res) => {
    try {
        //get all candidates
        const candidateData = await candidates.findAll({
            where:{
                job_id: req.params.id
            },
        });
        //serialize the data
        const candidates = candidateData.map((candidate) => candidate.get({plain: true}));
        // render the dashboard view
        res.render('candidate-list', {
            candidates,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/candidate/:id', withAuth, async (req, res) => {
    try {
        //get one candidate
        const candidateData = await candidates.findByPk(req.params.id,{
            include: [
                {
                  model: resume,
                },
            ]
        });
        //serialize the data
        const candidate = candidateData.get({plain: true});
        // render the dashboard view
        res.render('candidate-page', {
            candidate,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new-job', withAuth, async (req, res) => {
    //new job form
    res.render('new-job');    
});


module.exports = router;