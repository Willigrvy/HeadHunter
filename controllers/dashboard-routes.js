//dependcies
const sequelize = require('../config/connection');
const { Headhunter, Candidate, Resume, Job  } = require('../Model');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', withAuth, async (req, res) => {
    try {
        //get all jobs
        const jobData = await Job.findAll({
            where:{
                headhunter_id: req.session.user_id
            },
            order: [['created_at', 'DESC']]
        });
        //serialize the data
        const jobs = jobData.map((job) => job.get({plain: true}));
        // render the dashboard view
        res.render('dashboard', {
            jobs,
            user_type: req.session.user_type,
            logged_user: req.session.user_id,
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/candidate-list/:job_id', withAuth, async (req, res) => {
    try {
        //get all resumes
        const resumeData = await Resume.findAll({
            where:{
                job_id: req.params.job_id
            },
            include: [
                {
                  model: Candidate
                },
            ],
        });
        //serialize the data
        const resumes = resumeData.map((resume) => resume.get({plain: true}));
        // render the dashboard view
        res.render('candidate-list', {
            resumes,
            logged_in: req.session.logged_in,
            logged_user: req.session.user_id,
            user_type: req.session.user_type
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/candidate-page/:resume_id', withAuth, async (req, res) => {
    try {
        //get one candidate
        const resumeData = await Resume.findByPk(req.params.resume_id,{
            include: [
                {
                  model: Candidate
                },
            ],
        });
        // serialize the data
        const resume = resumeData.get({plain: true});
        // render the dashboard view
        res.render('candidate-page', {
            resume,
            logged_in: req.session.logged_in,
            logged_user: req.session.user_id,
            user_type: req.session.user_type,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new-job', withAuth, async (req, res) => {
    try {
        //job form
        res.render('new-job', {
            logged_in: req.session.logged_in,
            logged_user: req.session.user_id,
            user_type: req.session.user_type
        }); 
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;