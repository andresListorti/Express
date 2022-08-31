const express = require("express");
const app = express();
const people = require("./routes/people");
const login = require("./routes/auth");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false })); //para poder postear
// parse json
app.use(express.json());

// router
app.use("/api/people", people);

// login
app.use("/login", login);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
