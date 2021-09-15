const { Model, DataTypes } = require("sequelize/types");
const Sequelize = require('../config/connection');

class BlogPost extends Model {};

BlogPost.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false
        },
        content: {
                type: DataTypes.TEXT,
                allowNull:false
            },
            dateCreated:{
                type:DataTypes.DATE,
                allowNull:false,
                defaultValue: DataTypes.NOW
            },
        
    },
    {
        sequelize,
        modelName:'BlogPost'
    }
);
module.exports = BlogPost;