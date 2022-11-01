exports.GetWeatherByCity = async function (req, res) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=7914d5a440960cfd5df3bd0388a7ad0f&units=metric`;

  let response = await fetch(api, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });
  let data = await response.json();

  let obj = { city: data.name, temp: data.main.temp };
  setInterval(() => console.log(obj.temp), 60*60*24*1000);
  res.json(obj);
};

exports.GetWeatherByCoord = function (req, res) {
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}&appid=7914d5a440960cfd5df3bd0388a7ad0f&units=metric`;

  fetch(api, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let obj = { city: data.name, temp: data.main.temp };
      res.json(obj);
    });
};
/* 48.839810628915686, 2.237457899317402 */
