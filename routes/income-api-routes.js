let RecurringIncome = require("../models/recurringIncome");
let StaticIncome = require("../models/staticIncome")

module.exports = function (app) {

    app.post("/recurringIncome/new", function (req, res) {

        console.log("RecurringIncome Data:");
        console.log(req.body);

        RecurringIncome.create({
            recurring_income_name: req.body.recurring_income_name,
            recurring_income_ammt: req.body.recurring_income_ammt,
        }).then(function (results) {
            console.log(results)
            res.end();
        });
    });

    app.get("/recurringIncome/select", function(req, res) {
        RecurringIncome.findAll({}).then(function(recIncData) {
          res.json(recIncData);
        });
      });

    app.post("/staticIncome/new", function (req, res) {

        console.log("Static Income Data:");
        console.log(req.body);

        StaticIncome.create({
            static_income_name: req.body.static_income_name,
            static_income_ammt: req.body.static_income_ammt,
            static_income_date: req.body.static_income_date,
        }).then(function (results) {
            console.log(results)
            res.end();
        });
    });

    app.get("/staticIncome/select", function(req, res) {
        StaticIncome.findAll({}).then(function(statIncData) {
          res.json(statIncData);
        });
      });
};