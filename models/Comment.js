
const {Model, DataTypes}=require('sequelize');
const { now } = require('sequelize/types/lib/utils');
const sequelize = require = require('../config/connection.js');
class Comment extends Model{}
Comment.init(
    {
        content:{
            type: DataTypes.TEXT
        },
        dateCreated:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue:DataTypes.NOW
        }
    },
    {
        sequelize,
        modelName:'Comment'
    }
);
module.exports = Comment ;