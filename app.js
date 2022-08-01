const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit server");
  res.end(`<a href='/'>Click Me</a>`);
});

server.listen(5000);
