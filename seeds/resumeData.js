const {Resume} = require('../Model');

// const ResumeData





const resumeseed = () => Resume.bulkCreate(ResumeData);
module.exports =resumeseed