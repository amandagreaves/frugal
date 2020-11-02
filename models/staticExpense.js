var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var StaticExpenses = sequelize.define("static_expenses", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    static_expense_name: Sequelize.STRING,
    static_expense_ammt: Sequelize.DECIMAL,
    static_expense_date: Sequelize.DATE
});

StaticExpenses.sync();

module.exports = StaticExpenses;