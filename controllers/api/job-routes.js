const router = require('express').Router();
const { Job } = require('../../Model');

//create job
router.post('/', async (req, res) => {
    try {
        const jobData = await Job.create({
            //form data
            title: req.body.title,
            company_name: req.body.company_name,
            job_description: req.body.job_description,
            //get headhunter from session
            headhunter_id: req.session.user_id
        });

        res.status(200).json(jobData);
       
    } catch (err) {
        console.log(err);
        //400 is bad request
        res.status(400).json(err);
    }
});

//get jobs
router.get('/', async (req, res) => {
    try {
        const jobData = await Job.findAll();

        res.status(200).json(jobData);
       
    } catch (err) {
        console.log(err);
        //400 is bad request
        res.status(400).json(err);
    }
});
module.exports = router;