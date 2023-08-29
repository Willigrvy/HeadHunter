const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

class Image extends Model {}

Image.init(
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
        data: {
            type: DataTypes.BLOB("long"),
        },
        headhunter_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'Headhunter',
                key:'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Image'        
    }
);

module.exports = Image;