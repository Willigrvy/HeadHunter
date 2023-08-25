const router = require('express').Router();
const { Job } = require('../../Model');

//create job
router.post('/:id', async (req, res) => {
    try {
        const jobData = await Job.create({
            //form data
            title: req.body,
            company_name: req.body.company_name,
            job_description: req.body.job_description,
            //get headhunter from parmas
            headhunuter_id: req.params.id
        });

        res.status(200).json(jobData);
       
    } catch (err) {
        console.log(err);
        //400 is bad request
        res.status(400).json(err);
    }
});

//update with Cadidate that applied
router.put('/new-candidate/:id', async (req, res) => {
    try {
        //get job data form pk in parmas
        const jobData = await Job.findbyPk(req.params.id);
        //searialize data
        const job = jobData.get({plain: true});
        //get just the previous candidate information
        candidateList = job.candidate_id;
        //if there were no candidates in job data
        if(!candidateList)
        {
            //update candidate with an array with a singular value from the req.body
            Job.update({canidates_id: [req.body.canidates_id]});
        } else {
            // add req.bod.candidate_id to exisisting list
            canindateList.append(req.body.canidates_id);
            //update candidate with 
            Job.update({canidates_id: candidateList});
        }

        res.status(200).json(jobData);
       
    } catch (err) {
        console.log(err);
        //400 is bad request
        res.status(400).json(err);
    }
});

module.exports = router;