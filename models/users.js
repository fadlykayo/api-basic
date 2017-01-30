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
      },
      getUsers: function () {
        models.Users.findAll({raw:true}).then(function (findUser) {
          cb(findUser);
        })
      }
      getUser: function (id) {
        models.Users.findById(id).then(function (findUser) {
          cb(findUser);
        })
      }
      createUser: function (username, password, email, birthday) {
        models.Users.create({name: username, password: password, email: email, birthday: birthday}).then(function (createUser) {
          cb(createUser);
        })
      }
    }
  });
  return Users;
};
