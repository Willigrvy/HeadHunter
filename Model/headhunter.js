const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

class headhunters extends Model {
    checkpassword(loginpw){
        return bcrypt.compareSync(loginpw, this.password)
    }
}



headhunters.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        specialty:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[10]
            }
        }

    },
    {
        hooks:{
            beforeCreate: async (newUserData)=>{
                newUserData.password = await bcrypt.hash(newUserData.password,12);
                return newUserData;
            },
            beforeUpdate: async(updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData, 12);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'headhunter'
        
    }
);

module.exports = headhunters;