const express = require("express"),
  app = express(),
  port = 9000,
  routes = require("./routes/routes.js");

routes(app);

app.listen(port);
