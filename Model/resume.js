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
        hooks:{
            beforeCreate: async (newUserData)=>{
                newUserData.address = await bcrypt.hash(newUserData.address);
                return newUserData;
            },
            beforeUpdate: async(updatedUserData) => {
                updatedUserData.address = await bcrypt.hash(updatedUserData);
                return updatedUserData;
            }
        },
        hooks:{
            beforeCreate: async (newUserData)=>{
                newUserData.email = await bcrypt.hash(newUserData.email);
                return newUserData;
            },
            beforeUpdate: async(updatedUserData) => {
                updatedUserData.email = await bcrypt.hash(updatedUserData);
                return updatedUserData;
            }
        },
        hooks:{
            beforeCreate: async (newUserData)=>{
                newUserData.phone_number = await bcrypt.hash(newUserData.phone_number);
                return newUserData;
            },
            beforeUpdate: async(updatedUserData) => {
                updatedUserData.phone_number = await bcrypt.hash(updatedUserData);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Resume',
    }),

    module.exports = Resume;