const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Job extends Model {}

Job.init(
    {
        id:{
            type:DataType.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        company_name:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        job_description:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        headhunter_id:{
            type:DataType.INTEGER,
            references:{
                model:'Headhunter',
                key:'id'
            }
        },
        canidates_id:{
            type:DataType.INTEGER,
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