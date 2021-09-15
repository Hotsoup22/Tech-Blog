const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(userPassword){
        return bcrypt.compareSync(userPassword, this.password)
    }
};

User.init(
    {
         name: {
             type:DataTypes.STRING,
             allowNull:false
         },
         username:{
             type:DataTypes.STRING,
             allowNull:false,
             unique:true
         },
          email: {
              type: DataTypes.STRING,
              allowNull: false,
              unique:true,
              validate:{
                  isEmail: true
              }
          },
          password: {
              type:DataTypes.STRING,
              allowNull:false
          }
    },
    {
         hooks:{
             beforeCreate: async(newUserData) => {
                 newUserData.password = await bcrypt.hash(newUserData.password,10);
                 return newUserData;
             },
             beforeUpdate: async (newUserData)=>{
                 newUserData.password = await bcrypt.hash(newUserData.password, 10);
                 return newUserData;
             }
        }
    },
    {
     sequelize,
     freezeTableName: true,
     modelName: 'User',
    }
)
module.exports = User;