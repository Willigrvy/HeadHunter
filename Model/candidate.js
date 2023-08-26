const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt');

class Candidate extends Model {
    checkpassword(loginpw){
        return bcrypt.compareSync(loginpw, this.password)
    }
}

Candidate.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
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
     modelName: 'Candidate',
    
    },     
);

module.exports = Candidate