const Candidate = require('./candidate');
const Headhunter = require('./headhunter');
const Job= require('./Job');
const Resume = require('./resume');

Candidate.belongsToMany(Job,{
    through:Resume,
    foreignKey: 'Candidate_id'
});
Job.belongsToMany(Candidate,{
    through:Resume,
    foreignKey:'Job_id'
});
Headhunter.belongsToMany(Candidate,{
    through:Job,
    foreignKey:'Headhunter_id'
});
Candidate.belongsToMany(Headhunter,{
    through:Job,
    foreignKey: 'candidate_id'
});

module.exports = {
    Candidate,
    Headhunter,
    Job,
    Resume
}