module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/income/recurring", function(req, res) {
    res.render('recurringIncome');
  });

  app.get("/expense/recurring", function(req, res) {
    res.render('recurringExpenses', {recurring_expense_name: "Car Payment"});
  });
  
  app.get("/income/static", function(req, res) {
    res.render('staticIncome');
  });

  app.get("/goals", function(req, res) {
    res.render('goals');
  });

  app.get("/income/static", function(req, res) {
    res.render('staticIncome');
  });
  
  app.get("/expense/static", function(req, res) {
    res.render('staticExpense');
  });

};