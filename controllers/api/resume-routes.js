const router = require('express').Router();
const { Resume, Candidate } = require('../../Model');

//create resume
router.post('/:job_id', async (req, res) => {
    try {
        const resumeData = await Resume.create({
            //form data
            name: req.body.name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            experience: req.body.experience,
            education: req.body.education,
            skills: req.body.skills,
            hobbies: req.body.hobbies,
            // the candidateloggedin
            candidate_id: req.session.user_id,
            // job id is in the params
            job_id: req.params.job_id

        });

        res.status(200).json(resumeData);
       
    } catch (err) {
        console.log(err);
        //400 is bad request
        res.status(400).json(err);
    }
});

//get resumes
router.get('/', async (req, res) => {
    try {
        const resumeData = await Resume.findAll({
            include: [
                {
                  model: Candidate
                },
            ],
        });

        res.status(200).json(resumeData);
       
    } catch (err) {
        console.log(err);
        //400 is bad request
        res.status(400).json(err);
    }
});

//get resumes
router.get('/:resume_id', async (req, res) => {
    try {
        const resumeData = await Resume.findByPk(req.params.resume_id,{
            include: [
                {
                  model: Candidate
                },
            ],
        });

        res.status(200).json(resumeData);
       
    } catch (err) {
        console.log(err);
        //400 is bad request
        res.status(400).json(err);
    }
});

module.exports = router;