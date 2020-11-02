let RecurringIncome = require("../models/recurringIncome");
let RecurringExpense = require("../models/recurringExpense")
let StaticIncome = require("../models/staticIncome")
let StaticExpense = require("../models/staticExpense")

module.exports = function(app) {
  
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
  
      RecurringExpense.create({
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
  
      StaticIncome.create({
        static_income_name: req.body.static_income_name,
        static_income_ammt: req.body.static_income_ammt,
        static_income_date: req.body.static_income_date,
      }).then(function(results) {
        console.log(results)
        res.end();
      });  
    });
    
    app.post("/staticExpense/new", function(req, res) {
  
      console.log("Static Expense Data:");
      console.log(req.body);
  
      StaticExpense.create({
        static_expense_name: req.body.static_expense_name,
        static_expense_ammt: req.body.static_expense_ammt,
        static_expense_date: req.body.static_expense_date,
      }).then(function(results) {
        console.log(results)
        res.end();
      }); 
    });
  };