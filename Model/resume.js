const {Modle, DataType} = require('sequelize');
const sequelize = require('../config/connection')


class resume extends Modle {
 
}



resume.init(
    {
        
        name:{
            type: DataType.STRING,
            allowNull:false
        },
        email:{
            type: DataType.STRING,
            allowNull:false,
        },
        phone_number: {
            type: DataType.STRING,
            allowNull: false,
        },
        experience:{
            type: DataType.STRING,
            allowNull:false,
            
        },
        education:{
            type:DataType.STRING,
            allowNull:false,
        },
        skills:{
            type: DataType.STRING,
            allowNull: false,
        },
        hobbies:{
            type: DataType.STRING,
            allownull: true,
        }

    }),

    module.exports = resume;