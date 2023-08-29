const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')


class Resume extends Model {
    
}

Resume.init(
    {
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        experience:{
            type: DataTypes.TEXT,
            allowNull:false,
        },
        education:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        skills:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        hobbies:{
            type: DataTypes.TEXT,
            allownull: true,
        },
        candidate_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'Candidate',
                key:'id'
            }
        },
        job_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'Job',
                key:'id'
            }
        } 
    },
    {

        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Resume',
    }),

    module.exports = Resume;