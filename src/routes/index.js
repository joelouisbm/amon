module.exports.initRoutes = (app) => {
  app.get("/", (req, res) => {
    res.json({
      name: "Api Test",
    });
  });
  
  app.use("*", (req, res) => {
    res.json({
      code: 404,
      error: "Not Found",
    });
  });
};
