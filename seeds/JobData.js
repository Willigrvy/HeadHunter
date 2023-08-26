
const {Job} = require('../models');

const JobData = [

    {
        title:'',
        Companyname:'',
        Jobdescription:'',
        headhunterId:'',
    },
    {
        title:'',
        Companyname:'',
        Jobdescription:'',
        headhunterId:'',
    }, {
        title:'',
        Companyname:'',
        Jobdescription:'',
        headhunterId:'',
    }, {
        title:'',
        Companyname:'',
        Jobdescription:'',
        headhunterId:'',
    }, {
        title:'',
        Companyname:'',
        Jobdescription:'',
        headhunterId:'',
    },
]







const seedJob = () => Job.bulkCreate(JobData);
module.exports =seedJob