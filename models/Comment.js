
const {Model, DataTypes}=require('sequelize');
// const { now } = require('sequelize/types/lib/utils');
const sequelize = require = require('../config/connection.js');
class Comment extends Model{}
Comment.init(
    {
        // id: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// 	primaryKey: true,
		// 	autoIncrement: true,
		// },
        content:{
            type: DataTypes.TEXT,
            allowNull:false,
        },
        // dateCreated:{
        //     type:DataTypes.DATE,
        //     allowNull:false,
        //     defaultValue:DataTypes.NOW
        // },
        // userId: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// 	references: {
		// 		model: 'user',
		// 		key: 'id',
		// 	},
        // },
        
        //     blogpostId: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// 	references: {
		// 		model: 'blogpost',
		// 		key: 'id',
		// 	},
        // },
    },
    
    {
        sequelize,
        modelName:'Comment',
        timestamps: false,
		freezeTableName: true,
    }
);
module.exports = Comment ;