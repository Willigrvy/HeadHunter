const Candidate = require('./candidate');
const Headhunter = require('./headhunter');
const Job= require('./Job');
const Resume = require('./resume');
const Image = require('./image');

//headhunter and job
Headhunter.hasMany(Job,{
    foreignKey: 'headhunter_id'
});

Job.belongsTo(Headhunter,{
    foreignKey: 'headhunter_id'
});

// job and resume---------
Job.hasMany(Resume, {
    foreignKey: 'job_id'
});

Resume.belongsTo(Job,{
    foreignKey: 'job_id'
});

//candidate and resume
Candidate.belongsTo(Resume,{
    foreignKey: 'candidate_id'
});

Resume.hasMany(Candidate,{
    foreignKey: 'candidate_id'
});

//headhunter and image
Headhunter.hasOne(Image,{
    foreignKey: 'headhunter_id'
})
Image.belongsTo(Headhunter,{
    foreignKey: 'headhunter_id'
})
module.exports = {
    Candidate,
    Headhunter,
    Job,
    Resume,
    Image
}