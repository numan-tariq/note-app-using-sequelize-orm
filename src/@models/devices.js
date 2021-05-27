'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class devices extends Model {
    static associate(models) {
      // define association here
    }
  };
  devices.init({
    id: 
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    deviceUUID: {
      type: DataTypes.UUID
    },
    deviceName: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'devices',
  });
  return devices;
};