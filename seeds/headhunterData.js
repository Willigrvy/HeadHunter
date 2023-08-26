const {Headhunter} = require('../Model');

const HeadhunterData = [

{
    
    
    name: 'P. Brain McPuggy',
    position:'C.E.O',
    username: 'TheBigDog',
    contact: 'topdog@Email.com',
    password: 'Purebred',



},{
    
    
    name: 'Looney CrazyPants',
    position: 'Science Industry',
    username: 'TheProfessor',
    contact: 'e=mc2@ElementInternals.com',
    password: 'Boom',



},{
    
    
    name: 'Hacker Cunningham',
    position: 'Tech Industry',
    username: 'Anonymous',
    contact:'Anon@email.com',
    password:'Question',



},{
    

    name: 'Jo Kerr',
    position: 'Business Industry',
    username: 'Mimesnotcrimes',
    contact: 'Bigshoes@email.com',
    password:"Honkhonk",



},






]





const seedHeadhunter = () => Headhunter.bulkCreate(HeadhunterData);
module.exports =seedHeadhunter