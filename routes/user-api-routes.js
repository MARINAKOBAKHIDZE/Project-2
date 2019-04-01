var db = require("../models");
​
module.exports = function (app) {
 // Get all users
 app.get("/api/users", function (req, res) {
  db.User.findAll({}).then(function (dbUser) {
   res.json(dbUser);
  });
 });
​
 // Get a specific user
 app.get("/api/user/:id", function (req, res) {
  db.User.findOne({
   where: {
    id: req.params.id
   }
  }).then(function (dbUser) {
   res.json(dbUser);
  });
 });
​
 // Create a new user
 app.post("/api/users", function (req, res) {
  db.User.create({
   firstName: req.body.firstNameInput,
   lastName: req.body.lastNameInput,
   addressLine1: req.body.addressLine1Input,
   addressLine2: req.body.addressLine2Input,
   city: req.body.cityInput,
   state: req.body.stateInput,
   zip: req.body.zipCodeInput,
   SSN: req.body.SNNinput,
   DOB: req.body.DOBinput,
   email: req.body.emailInput,
   username: req.body.usernameInput
  }).then(function (dbUser) {
   res.json(dbUser);
   console.log("posted");
  });
 });
​
 // Delete an user by id
 app.delete("/api/user/:id", function (req, res) {
  db.User.destroy({ where: { id: req.params.id } }).then(function (dbUser) {
   res.json(dbUser);
  });
 });
};