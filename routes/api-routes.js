var RecurringIncome = require("../models/frugal_db.js");

module.exports = function(app) {

    // Get all chirps
    // app.get("/api/all", function(req, res) {
  
      // Finding all Chirps, and then returning them to the user as JSON.
      // Sequelize queries are asynchronous, which helps with perceived speed.
      // If we want something to be guaranteed to happen after the query, we'll use
      // the .then function
    //   Chirp.findAll({}).then(function(results) {
    //     // results are available to us inside the .then
    //     res.json(results);
    //   });
  
    // });
  
    app.post("/api/new", function(req, res) {
  
      console.log("RecurringIncome Data:");
      console.log(req.body);
     
  
      RecurringIncome.create({
        recurring_income_name: req.body.recurring_income_name,
        recurring_income_ammt: req.body.recurring_income_ammt,
      }).then(function(results) {
        res.end();
      });
  
    });
  
  };