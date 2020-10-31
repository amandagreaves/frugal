// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Recurring" model that matches up with DB
var RecurringIncome = sequelize.define("recurring_income", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    recurring_income_name: Sequelize.STRING,
    recurring_income_ammt: Sequelize.DECIMAL
});
// var StaticIncome = sequelize.define("static_income", {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     static_income_name: Sequelize.STRING,
//     static_income_ammt: Sequelize.DECIMAL,
//     static_income_date: Sequelize.DATE
// });
// var RecurringExpenses = sequelize.define("recurring_expenses", {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     recurring_expense_name: Sequelize.STRING,
//     recurring_expense_ammt: Sequelize.DECIMAL,
//     recurring_expense_date: Sequelize.DATE
// });
// var StaticExpenses = sequelize.define("static_expenses", {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     static_expense_name: Sequelize.STRING,
//     static_expense_ammt: Sequelize.DECIMAL,
//     static_expense_date: Sequelize.DATE
// });
// var Goals = sequelize.define("goals", {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     goal_name: Sequelize.STRING,
//     goal_ammt: Sequelize.DECIMAL,
//     goal_completion_date: Sequelize.DATE
// });

// // Syncs with DB
RecurringIncome.sync();
// StaticIncome.sync();
// RecurringExpenses.sync();
// StaticExpenses.sync();
// Goals.sync();

// Makes the Recurring Income Model available for other files (will also create a table)
module.exports = RecurringIncome;