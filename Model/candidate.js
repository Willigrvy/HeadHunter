const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class candidate extends Model {
    checkpassword(loginpw){
        return bcrypt.compareSync(loginpw, this.password)
    }
}

candidate.init(
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
        headhunter_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'headhunter',
                key:'id'
            }
        },
        resume_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'resume',
                key:'id'
            }
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
     modelName: 'candidate',
    
    }, 
    

    
);
module.exports = candidate