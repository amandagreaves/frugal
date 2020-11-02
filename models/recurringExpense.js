var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var RecurringExpenses = sequelize.define("recurring_expenses", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    recurring_expense_name: Sequelize.STRING,
    recurring_expense_ammt: Sequelize.DECIMAL,
    recurring_expense_date: Sequelize.DATE
});

RecurringExpenses.sync();

module.exports = RecurringExpenses;