const {Resume} = require('../Model');

const ResumeData =[
    {
        name:'Elijah Williams',
        email:'bolb@gmail.com',
        phone_number:'1-789-555-123',
        address:'2334 Willowbay Row',
        experience:'I can do only one thing in my life and is eating',
        skills:'Sleeping, eating, snoring',
        education:'trained in the secre panda village',
        hobbies:'watching tv',
        candidate_id: 2,
        job_id: 1,
    },

]
const resumeseed = () => Resume.bulkCreate(ResumeData);
module.exports =resumeseed