const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Job extends Model {}

Job.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        company_name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        job_description:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        headhunter_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'Headhunter',
                key:'id'
            }
        },
        candidate_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'Candidate',
                key:'id'
            }
        }, 
    },
    {
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'Job',
    }
)

module.exports = Job