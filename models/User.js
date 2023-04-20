const sequelize=require("sequelize")
const connection=require("../database/connection")

const User= connection.define('users', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

    name: {
        type: sequelize.STRING,
        allowNull: false,
        required:true,
      },
    
    email: {
        type: sequelize.STRING,
        allowNull: false,
        required:true,
        validate:{
          isEmail:{
          }
        }
      },

    password: {
        type: sequelize.STRING,
        allowNull: false,
        required:true,
      },

      isAdmin: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

});


//User.sync({force:true})
module.exports= User;
  
        