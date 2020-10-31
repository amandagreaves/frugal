var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var StaticIncome = sequelize.define("static_income", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    static_income_name: Sequelize.STRING,
    static_income_ammt: Sequelize.DECIMAL,
    static_income_date: Sequelize.DATE
});

StaticIncome.sync();

module.exports = StaticIncome;