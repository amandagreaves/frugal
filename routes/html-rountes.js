module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/expense/recurring", function(req, res) {
    res.render('recurringExpenses');
  });

};