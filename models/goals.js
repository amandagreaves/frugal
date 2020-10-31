var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Goals = sequelize.define("goals", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    goal_name: Sequelize.STRING,
    goal_ammt: Sequelize.DECIMAL,
    goal_completion_date: Sequelize.DATE
});

Goals.sync();

module.exports = Goals;