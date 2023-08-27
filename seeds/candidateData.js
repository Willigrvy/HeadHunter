const {Candidate} = require('../Model');

const candidateData = [
    {
        name: 'Noah Smith',
        username:'Noahsmith',
        password:'123456',
    
    },{
        name: 'Elijah Williams',
        username:'Elijahwilliams',
        password:'verygoodpass',
    },{
        name: 'Levi Brown',
        username:'Levibrown',
        password:'maximumsecruity',
    },{
        name: 'James Jones',
        username:'Jamesjones',
        password:'heavydutypass',
    },{
        name: 'Ethan Garica',
        username:'Ethangarcia',
        password:'lockandkey',

    },{
        name: 'Samuel Miller',
        username:'Samuelmiller',
        password:'shackle',

    },{

        name: ' Andrew Davis',
        username:'Andewdavis',
        password:'cuffed4life',
    },{
        name: 'Matthew Johnson',
        username:'Matthewjohnson',
        password:'deathpenalty',
    },

]

const candidateseed = () => Candidate.bulkCreate(candidateData);

module.exports =candidateseed