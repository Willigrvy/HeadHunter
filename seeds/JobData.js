
const {Job} = require('../Model');

const JobData = [

  {
        title:'1',
        company_name:'1',
        job_description:'1',
        headhunter_id:'1',
    },{
        title:'1',
        company_name:'1',
        job_description:'1',
        headhunter_id:'1',
    },{
        title:'1',
        company_name:'1',
        job_description:'1',
        headhunter_id:'1',
    },{
        title:'1',
        company_name:'1',
        job_description:'1',
        headhunter_id:'1',
    },{
        title:'1',
        company_name:'1',
        job_description:'1',
        headhunter_id:'1',
    },
]







const jobseed = () => Job.bulkCreate(JobData);
module.exports =jobseed