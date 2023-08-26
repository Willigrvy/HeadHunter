const router = require('express').Router();
const { Candidate } = require('../../Model');

// create candidate data for sign up
router.post('/', async (req, res) => {
    try {
      const candidateData = await Candidate.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = candidateData.id;
        // if signed up session is logged in
        req.session.logged_in = true;
        //keeps tack of what type of user is logged in
        req.session.user_type = 'candidate';
  
        res.status(200).json(candidateData);
      });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// cheacks candidate login information
router.post('/login', async (req, res) => {
    try {
        const candidateData = await Candidate.findOne({ where: { username: req.body.username } });
        //check username
        if(!candidateData){
            res.status(400).json({
                message: 'Incorrect username or password, please try again' 
            });
            return;
        }
        //check password
        const validPassword = await candidateData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({
                message: 'Incorrect username or password, please try again' 
            });
            return;
        }
        //save session
        req.session.save(() =>{
            req.session.user_id = candidateData.id;
            req.session.logged_in = true;
            req.session.user_type = 'candidate';
            res.json({ user: candidateData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            // 204 means that the req sucess but there is not content
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;