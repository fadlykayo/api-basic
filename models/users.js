'use strict';
let models = require('../models')

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};
