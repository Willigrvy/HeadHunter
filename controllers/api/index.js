const router = require('express').Router();

const headhunterRoutes = require('./headhunter-routes');
const candidateRoutes = require('./candidate-routes');
const resumeRoutes = require('./resume-routes');
const jobRoutes = require('./job-routes');

router.use('/headhunters', headhunterRoutes);
router.use('/candidates', candidateRoutes);
router.use('/resumes', resumeRoutes);
router.use('/jobs', jobRoutes);


module.exports = router;