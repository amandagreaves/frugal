// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the third argument spot is our password.
var sequelize = new Sequelize("frugal_db", "root", process.env.PASSWORD, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Export the connection for other files to use.
module.exports = sequelize;
