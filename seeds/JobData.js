
const {Job} = require('../Model');

const JobData = [

    {
        title:'Job 1',
        company_name:'company 1',
        job_description:'best job ever 1',
        headhunter_id:'1',
    },{
        title:'Job 2',
        company_name:'company 2',
        job_description:'average job',
        headhunter_id:'2',
    },{
        title:'Job 4',
        company_name:'company 4',
        job_description:'minimum wage',
        headhunter_id:'3',
    },{
        title:'Job 5',
        job_description:'independent',
        headhunter_id:'4',
    },{
        title:'job6',
        company_name:'company 2',
        job_description:'average job 2',
        headhunter_id:'2',
    },
]







const jobseed = () => Job.bulkCreate(JobData);
module.exports =jobseed