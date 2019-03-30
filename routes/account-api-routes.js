var db = require("../models");

module.exports = function(app) {
  // Get all accounts
  app.get("/api/account", function(req, res) {
    db.Account.findAll({}).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });

  // Get a specific Account
  app.get("/api/account/:id", function(req, res){
    db.Account.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAccount){
      res.json(dbAccount);
    });
  });

  // Create a new Account
  app.post("/api/account", function(req, res) {
    db.Account.create(req.body).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });

  // Delete an Account by id
  app.delete("/api/account/:id", function(req, res) {
    db.Account.destroy({ where: { id: req.params.id } }).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });
};