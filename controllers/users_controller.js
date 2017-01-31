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
      res.send({user:data})
    })
  },
  createUser: (req, res) => {
    models.Users.create({
      name: req.body.name,
      password: hash.generate(req.body.password),
      email: req.body.email,
      birthday: req.body.birthday,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(function (data) {
      // req.json(data);
      // res.send(`${JSON.stringify({users:data})}\nhas been created`)
      res.send(`User:\nname:${req.body.name}\npassword:${req.body.password}\nemail:${req.body.email}\nbirthday: ${req.body.birthday}\nhas been created`)
    })
  },
  deleteUser: (req, res) => {
    models.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.send(`Delete user with ID: ${req.params.id}`)
    })
  },
  updateUser: (req, res) => {
    models.Users.findById(req.params.id).then(function (findUser) {
      findUser.update({
        name: req.body.name,
        password: hash.generate(req.body.password),
        email: req.body.email,
        birthday: req.body.birthday,
        updatedAt: new Date()
      })
    }).then(function (data) {
      // res.json(data);
      res.send(`Update user:\nname:${req.body.name}\npassword:${req.body.password}\nemail:${req.body.email}\nbirthday: ${req.body.birthday}`)
    })
  }
}
