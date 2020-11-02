let RecurringIncome = require("../models/frugal_db");
let RecurringExpenses = require("../models/recurringExpenses")

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
  
    app.post("/recurringincome/new", function(req, res) {
  
      console.log("RecurringIncome Data:");
      console.log(req.body);
  
      RecurringIncome.create({
        recurring_income_name: req.body.recurring_income_name,
        recurring_income_ammt: req.body.recurring_income_ammt,
      }).then(function(results) {
        console.log(results)
        res.end();
      });
  
    });
    
    
    app.post("/recurringExpense/new", function(req, res) {
  
      console.log("RecurringExpense Data:");
      console.log(req.body);
  
      RecurringIncome.create({
        recurring_expense_name: req.body.recurring_expense_name,
        recurring_expense_ammt: req.body.recurring_expense_ammt,
        recurring_expense_date: req.body.recurring_expense_date,
      }).then(function(results) {
        console.log(results)
        res.end();
      });
  
    });


    app.post("/staticIncome/new", function(req, res) {
  
      console.log("Static Income Data:");
      console.log(req.body);
  
      RecurringIncome.create({
        static_income_name: req.body.static_income_name,
        static_income_ammt: req.body.static_income_ammt,
        static_income_date: req.body.static_income_date,
      }).then(function(results) {
        console.log(results)
        res.end();
      });
  
    });
  
  };