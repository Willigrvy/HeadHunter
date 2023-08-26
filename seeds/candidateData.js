const {Candidate} = require('../Model');

const CAndidateData = [


  {
    
        
        name: 'Noah Smith',
        position:'Tech',
        username:'Noahsmith',
        contact:'Noahsmith@email.com',
        password:'123456',
    
    
    
    },{
    
        
        name: 'Elijah Williams',
        position:'Tech',
        username:'Elijahwilliams',
        contact:'Elijahwilliams@email.com',
        password:'verygoodpass',
    
    
    
    },{
    
        
        name: 'Levi Brown',
        position:'Tech',
        username:'Levibrown',
        contact:'Levibrown@email.com',
        password:'maximumsecruity',
    
    
    
    },{
    
        
        name: 'James Jones',
        position:'Buisness',
        username:'Jamesjones',
        contact:'Jamesjones@email.com',
        password:'heavydutypass',
    
    
    
    },{
    
        
        name: 'Ethan Garica',
        position:'Buisness',
        username:'Ethangarcia',
        contact:'Ethangarcia@email.com',
        password:'lockandkey',
    
    
    
    },{
    
        
        name: 'Samuel Miller',
        position:'Buisness',
        username:'Samuelmiller',
        contact:'Samuelmiller@email.com',
        password:'shackle',
    
    
    
    },{
    
        
        name: ' Andrew Davis',
        position:'Science',
        username:'Andewdavis',
        contact:'Andrewdavis@email.com',
        password:'cuffed4life',
    
    
    
    },{
    
        
        name: 'Matthew Johnson',
        position:'Science',
        username:'Matthewjohnson',
        contact:'Matthewjohnson@email.com',
        password:'deathpenalty',
    
    
    
    },



]





const seedCandidate = () => Candidate.bulkCreate(candidateData);
module.exports =seedCandidate