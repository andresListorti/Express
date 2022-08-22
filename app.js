const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger-MiddleWare");
const authorice = require("./authorize");

// req => middleware => res ...  llega la req, hacemos algo y luego mandamos el res

// 1.- use vs route
// 2.- option - our own -como logger-/ express -como static- / third party - como morgan-

// app.use("/api", [logger, authorice]); // si esta primero se invoca en todas las rutas ......y si tiene una ruta todas las que la contengan lo van a tener en este caso con items y products --- si esta sin ruta se invoca en todoos los requests --- si son varias van en un array

// app.use(express.static('./public'))  // esto hace express

// third party middleware option - popular morgan - npm i morgan
app.use(morgan("tiny")); // tira el mothod, el ur, codigo y time ms que tardo la respuesta - :method :url :status :res[content-length] - :response-time ms - segun su documentation en su pagina web

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/products", [logger, authorice], (req, res) => {
  res.send("products");
});

app.get("/api/items", [logger, authorice], (req, res) => {
  console.log(req.user);
  res.send("items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
