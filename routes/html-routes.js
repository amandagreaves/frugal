module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/expense/recurring", function(req, res) {
    res.render('recurringExpenses');
  });
  app.get("/income/static", function(req, res) {
    res.render('staticIncome');
  });

  app.get("/goals", function(req, res) {
    res.render('goals');
  });

};