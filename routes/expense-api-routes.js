let RecurringExpense = require("../models/recurringExpense")
let StaticExpense = require("../models/staticExpense")

module.exports = function (app) {

  app.post("/recurringExpense/new", function (req, res) {

    console.log("RecurringExpense Data:");
    console.log(req.body);

    RecurringExpense.create({
      recurring_expense_name: req.body.recurring_expense_name,
      recurring_expense_ammt: req.body.recurring_expense_ammt,
      recurring_expense_date: req.body.recurring_expense_date,
    }).then(function (results) {
      res.end();
    });
  });

  app.get("/recurringExpense/select", function(req, res) {
    RecurringExpense.findAll({}).then(function(recExpData) {
      res.json(recExpData);
    });
  });

  app.post("/staticExpense/new", function (req, res) {

    console.log("Static Expense Data:");
    console.log(req.body);

    StaticExpense.create({
      static_expense_name: req.body.static_expense_name,
      static_expense_ammt: req.body.static_expense_ammt,
      static_expense_date: req.body.static_expense_date,
    }).then(function (results) {
      console.log(results)
      res.end();
    });
  });

  app.get("/staticExpense/select", function(req, res) {
    StaticExpense.findAll({}).then(function(statExpData) {
      res.json(statExpData);
    });
  });


};