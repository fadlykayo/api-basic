var express = require('express');
var router = express.Router();
let models = require('../models');
let hash = require('password-hash');

module.exports = {
  getUsers: (req, res) => {
    models.Users.findAll().then(function (data) {
      res.send({users:data})
    })
  },
  getUser: (req, res) => {
    models.Users.findById(req.params.id).then(function (data) {
      res.send({users:data})
    })
  },
  createUser: (req, res) => {
    models.Users.create({
      name: req.body.username,
      password: hash.generate(req.body.password),
      email: req.body.email,
      birthday: req.body.birthday,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(function (data) {
      res.send({users:data})
    })
  },
  deleteUser: (req, res) => {
    models.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.send({users:data})
    })
  },
  updateUser: (req, res) => {
    models.Users.findById(req.params.id).then(function (findUser) {
      findUser.update({
        name: req.body.username,
        password: hash.generate(req.body.password),
        email: req.body.email,
        birthday: req.body.birthday,
        updatedAt: new Date()
      })
    }).then(function (data) {
      res.send({users:data})
    })
  }
}
