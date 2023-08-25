const router = require('express').Router();
const { Resume } = require('../../Model');

//create resume
router.post('/', async (req, res) => {
    try {
        const resumeData = await Resume.create(req.body);

        res.status(200).json(resumeData);
       
    } catch (err) {
        console.log(err);
        //400 is bad request
        res.status(400).json(err);
    }
});


module.exports = router;