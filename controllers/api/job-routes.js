const router = require('express').Router();
const { Job } = require('../../Model');

//create resume
router.post('/', async (req, res) => {
    try {
        const jobData = await Job.create(req.body);

        res.status(200).json(jobData);
       
    } catch (err) {
        console.log(err);
        //400 is bad request
        res.status(400).json(err);
    }
});


module.exports = router;