const {Resume} = require('../Model');

const ResumeData =[


{
    name:'Noah Smith',
    email:'Noahsmith@email.com',
    phone_number:'111-111-1111',
    address:'1234 Whiney Blvd',
    experience:'Aerospace engineer 2018-2022',
    skills:'Building rockets that dont explode most of the time.',
    education:'Elite College',
    hobbies:'GLueing squirels to the fence',
    candidate_id:6284635,
    job_id: 728332
},

{
    name:'Elijah Williams',
    email:'Elijahwilliams@email.com',
    phone_number:'111-222-1111',
    address:'1462 Willowbend St',
    experience:'Designing airplanes that go really fast at Gofastbyair 2008-2022',
    skills:'designing planes that go fast',
    education:'Notsogreat college',
    hobbies:'pretending to be the a ghost at the local mall',
    candidate_id:6243244,
    job_id: 483957
},

{
    name:'Levi Brown',
    email:'Levibrown@email.com',
    phone_number:'111-333-1111',
    address:'1827 Partyplace Ln.',
    experience:'N/A',
    skills:'N/A',
    education:'Royal oaks H.S.',
    hobbies:'Pranking elderly people',
    candidate_id:8765244,
    job_id: 845217
},{
    name:'James Jones',
    email:'James Jones@email.com',
    phone_number:'111-444-1111',
    address:'26377 Salsbury St.',
    experience:'',
    skills:'Hacking',
    education:'Royal oaks H.S.',
    hobbies:'Pranking elderly people',
    candidate_id: 9604565,
    job_id: 785638,
},{
    name:'Ethan Garica',
    email:'Ethangarica@email.com',
    phone_number:'111-555-1111',
    address:'3526 Dive Club Ave.',
    experience:'frycook at mcSlappys',
    skills:'Wed developing',
    education:'Innercity H.S.',
    hobbies:'trading crypto stock',
    candidate_id:8974356,
    job_id: 984578
},{
    name:'Samuel Miller',
    email:'Samuelmiller@email.com',
    phone_number:'111-666-1111',
    address:'3746 Bacon St.',
    experience:'Manager of Sandwich Shop',
    skills:'Managing, Making baloonanimals',
    education:'Royal oaks H.S.',
    hobbies:'Showing up to parties uninvited',
    candidate_id:3849723,
    job_id: 847659
},{
    name:'Andrew Davis',
    email:'Andrewdavis@email.com',
    phone_number:'111-777-1111',
    address:'75843 Burgler BLvd.',
    experience:'Testing products on animals 2012-2020',
    skills:'really good at animal testing',
    education:'Prestigous Univerity',
    hobbies:'Pranking elderly people',
    candidate_id:3827564,
    job_id: 982653
},{
    name:'Matthew Johnson',
    email:'Matthewjohnson@email.com',
    phone_number:'111-888-1111',
    address:'9384 Poppy Ln.',
    experience:'N/A',
    skills:'N/A',
    education:'Royal oaks H.S.',
    hobbies:'Pranking elderly people',
    candidate_id:1826526,
    job_id: 727384
},





]
const resumeseed = () => Resume.bulkCreate(ResumeData);
module.exports =resumeseed