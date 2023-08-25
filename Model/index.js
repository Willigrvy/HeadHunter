const Candidate = require('./candidate')
const Headhunter = require('./headhunter')
const Job= require('./Job')

Candidate.hasMany(Job,{
    foreignKey: 'Candidate_id'
});
Job.belongToMany(Candidate,{
    foreignKey:'Job_id'
});
Headhunter.belongToMany(Candidate,{
    through:Job,
    foreignKey:'Headhunter_id'
});
Candidate.belongToMany(Headhunter,{
    through:Job,
    foreignKey: 'candidate_id'
});

module.exports = {
    Candidate,
    Headhunter,
    Job
}