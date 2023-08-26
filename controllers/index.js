const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const jobRoutes = require('./job-routes');
const uploadController = require('../public/js/uploadController');
const upload = require('../public/js/upload');
const uploadRoutes = require('./upload-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/jobs', jobRoutes);

router.post('/upload', upload.single("file"), uploadController.uploadFiles);
router.use('/upload', uploadRoutes);

module.exports = router;