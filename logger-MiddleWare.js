const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // SIEMPRE QUE SE USE MIDDLEWARE DEBE USARSE NEXT para pasar a la siguiente
};

module.exports = logger;
