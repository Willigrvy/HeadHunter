const {Headhunter} = require('../Model');

const HeadhunterData = [

{
    
    
    name: 'P. Brain McPuggy',
    specialty:'C.E.O',
    username: 'TheBigDog',
    email: 'topdog@Email.com',
    password: 'Purebred123456',
    


},{
    
    
    name: 'Looney CrazyPants',
    specialty: 'Science Industry',
    username: 'TheProfessor',
    email: 'e=mc2@ElementInternals.com',
    password: 'Boom123456',



},{
    
    
    name: 'Hacker Cunningham',
    specialty: 'Tech Industry',
    username: 'Anonymous',
    email:'Anon@email.com',
    password:'Question123',



},{
    

    name: 'Jo Kerr',
    specialty: 'Business Industry',
    username: 'Mimesnotcrimes',
    email: 'Bigshoes@email.com',
    password:"Honkhonk45678",



},






]





const headhunterseed = () => Headhunter.bulkCreate(HeadhunterData);
module.exports =headhunterseed