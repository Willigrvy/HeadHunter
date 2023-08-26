const {Resume} = require('../Model');

const ResumeData =[


{
    name:'1',
    email:'1',
    phone_number:'1',
    address:'1',
    experience:'1',
    skills:'1',
    education:'1',
    skills:'1',
    hobbies:'1',
    candidate_id:1,
    job_id: 1,
}

]
const resumeseed = () => Resume.bulkCreate(ResumeData);
module.exports =resumeseed