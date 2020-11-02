module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/expenses", function(req, res) {
    res.render('expenses');
  });

};