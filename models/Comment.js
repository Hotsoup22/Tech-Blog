
const {Model, DataTypes}=require('sequelize');
// const { now } = require('sequelize/types/lib/utils');
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
        },
            blogpostId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'blogpost',
				key: 'id',
			},
        },
    },
    
    {
        sequelize,
        modelName:'Comment'
    }
);
module.exports = Comment ;