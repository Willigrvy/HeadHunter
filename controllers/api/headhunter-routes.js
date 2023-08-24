const router = require('express').Router();
const { headhunters } = require('../../Model');

// create headhunter data for sign up
router.post('/', async (req, res) => {
    try {
      const headhunterData = await headhunters.create({
        username: req.body.username,
        password: req.body.password
      });
  
      req.session.save(() => {
        req.session.user_id = headhunterData.id;
        // if signed up session is logged in
        req.session.logged_in = true;
        //keeps tack of what type of user is logged in
        req.session.user_type = 'headhunter';
  
        res.status(200).json(headhunterData);
      });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// cheacks headhunter login information
router.post('/login', async (req, res) => {
    try {
        const headhunterData = await headhunters.findOne({ where: { username: req.body.username } });
        //check username
        if(!headhunterData){
            res.status(400).json({
                message: 'Incorrect username or password, please try again' 
            });
            return;
        }
        //check password
        const validPassword = await headhunterData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({
                message: 'Incorrect username or password, please try again' 
            });
            return;
        }
        //save session
        req.session.save(() =>{
            req.session.user_id = headhunterData.id;
            req.session.logged_in = true;
            req.session.user_type = 'headhunter';
            res.json({ user: headhunterData, message: 'You are now logged in!' });
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