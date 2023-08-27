const sequelize = require('../config/connection');
const headhunterseed = require ('../seeds/headhunterData');
const resumeseed = require ('../seeds/resumeData');
const candidateseed = require ('../seeds/candidateData');
const jobseed = require ('../seeds/jobData');
//const seedCandidate = require('.HeadhunterData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

await headhunterseed();



await candidateseed();

await jobseed();

await resumeseed();




    process.exit(0);
};
seedAll();