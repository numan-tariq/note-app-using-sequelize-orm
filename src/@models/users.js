'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.notes , {
        
      })
    }
  };
  users.init({
    id: 
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
       isEmail: true 
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: { 
           args: [7, 20],
           msg: "The password length should be between 7 and 20 characters."
        }
     }
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};