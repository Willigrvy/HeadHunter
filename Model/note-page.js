const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class notes_page extends Model {}

notes_page.init(
    {
        id:{
            type:DataType.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        application_reason:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        personal_rating:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        availability:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        salary_expectations:{
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        job_description:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        headhunter_id:{
            type:DataType.INTEGER,
            references:{
                model:'headhunter',
                key:'id'
            }
        },
        canidates_id:{
            type:DataType.INTEGER,
            references:{
                model:'candidate',
                key:'id'
            }
        }, 
    },
    {
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'notes_page',
    }
)

module.exports = notes_page