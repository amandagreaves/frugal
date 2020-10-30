CREATE DATABASE frugal_db;
USE frugal_db;

CREATE TABLE recurring_income
(
    id INT NOT NULL AUTO_INCREMENT,
    static_income_name VARCHAR(30) NOT NULL,
    recurring_income_ammt DECIMAL(10, 2),
);

CREATE TABLE static_income
(
    id INT NOT NULL AUTO_INCREMENT,
    static_income_name VARCHAR(30) NOT NULL,
    static_income_ammt DECIMAL(10, 2),
    static_income_date DATE NOT NULL
);

CREATE TABLE recurring_expenses
(
	id INT NOT NULL AUTO_INCREMENT,
    recurring_expense_name VARCHAR(30) NOT NULL,
    recurring_expense_ammt DECIMAL(10, 2) NOT NULL,
    recurring_expense_date DATE NOT NULL
);

CREATE TABLE static_expenses
(
	id INT NOT NULL AUTO_INCREMENT,
    static_expense_name VARCHAR(30) NOT NULL,
    static_expense_ammt DECIMAL(10, 2) NOT NULL,
    static_expense_date DATE NOT NULL
);

CREATE TABLE goals
(
	id INT NOT NULL AUTO_INCREMENT,
    goal_name VARCHAR (30) NOT NULL,
    goal_ammt INT (10) NOT NULL,
    goal_completion_date DATE NOT NULL
);