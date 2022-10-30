const weatherController = require("../controllers/WeatherController.js");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.send("Weather ");
  });

  app.get("/weather/:city", weatherController.GetWeatherByCity);
  app.get("/weather/:lat/:lon", weatherController.GetWeatherByCoord)
};
