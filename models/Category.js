const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    Shirts: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    Shorts: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    Music: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    Hats: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    Shoes: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
