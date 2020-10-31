var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var RecurringIncome = sequelize.define("recurring_income", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    recurring_income_name: Sequelize.STRING,
    recurring_income_ammt: Sequelize.DECIMAL
});

RecurringIncome.sync();

module.exports = RecurringIncome;