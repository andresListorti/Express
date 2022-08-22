const authorice = (req, res, next) => {
  const { user } = req.query;
  if (user === "juan") {
    req.user = { name: "juan", id: 3 };
    next();
  } else {
    res.status(401).send("no autorizado");
  }
};

module.exports = authorice;
