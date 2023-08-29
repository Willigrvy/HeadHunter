const {Candidate} = require('../Model');

const candidateData = [
    {
        name: 'Noah Smith',
        username:'Noahsmith',
        password:'123456',
        email: 'topdog1@Email.com',
    
    },{
        name: 'Elijah Williams',
        username:'Elijahwilliams',
        password:'verygoodpass',
        email: 'topdog2@Email.com',
    },{
        name: 'Levi Brown',
        username:'Levibrown',
        password:'maximumsecruity',
        email: 'topdog3@Email.com',
    },{
        name: 'James Jones',
        username:'Jamesjones',
        password:'heavydutypass',
        email: 'topdog4@Email.com',
    },{
        name: 'Ethan Garica',
        username:'Ethangarcia',
        password:'lockandkey',
        email: 'topdog5@Email.com',

    },{
        name: 'Samuel Miller',
        username:'Samuelmiller',
        password:'shackle',
        email: 'topdog6@Email.com',

    },{

        name: ' Andrew Davis',
        username:'Andewdavis',
        password:'cuffed4life',
        email: 'topdog7@Email.com',
    },{
        name: 'Matthew Johnson',
        username:'Matthewjohnson',
        password:'deathpenalty',
        email: 'topdog8@Email.com',
    },

]

const candidateseed = () => Candidate.bulkCreate(candidateData);

module.exports =candidateseed