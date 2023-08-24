const router = require('express').Router();

const headhunterRoutes = require('./headhunter-routes');
const candidateRoutes = require('./candidate-routes');


router.use('/headhunters', headhunterRoutes);
router.use('/candidates', candidateRoutes);


module.exports = router;