const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Flower = sequelize.define("Flower", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  q1: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  q2: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  q3: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  q4: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, // Adjust as needed
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: true, // Adjust as needed
  },
});

// Flower.sync()

module.exports = Flower;
