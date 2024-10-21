// backend/models/client.js
const { DataTypes } = require('sequelize');
const db = require('../config/cosmosConfig'); // Assuming you have a db config file

const Client = db.define('Client', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  taxId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = Client;
