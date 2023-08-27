
const {Job} = require('../Model');

const JobData = [

  {
        title:'Aerospace Engineer',
        company_name:'Sputnik R',
        job_description:'We need Spaceships built by you!!!',
        headhunter_id:'1',
    },{
        title: 'Buisness Manager',
        company_name:'SuperStore',
        job_description:'You are going to have to run this store',
        headhunter_id:'3',
    },{
        title:'Back-end Developer',
        company_name:'Imjustaguy inc.',
        job_description:'Pls do my homework for me',
        headhunter_id:'2',
    },{
        title:'Assistant Mad Scientist',
        company_name:'1',
        job_description:'1',
        headhunter_id:'11',
    },{
        title:'Wage Slave',
        company_name:'WeHateYou',
        job_description:'You do what you are told for minimum wage',
        headhunter_id:'3',
    },
]







const jobseed = () => Job.bulkCreate(JobData);
module.exports =jobseed