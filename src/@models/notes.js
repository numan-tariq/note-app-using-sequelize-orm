'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notes extends Model {
    static associate(models) {
      // define association here
      notes.belongsTo(models.devices, {
        foreignKey: 'deviceId',
        onDelete: 'CASCADE'
      })
    }
  };
  notes.init({
    id: 
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    deviceId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'notes',
  });

  return notes;
};