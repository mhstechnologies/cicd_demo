const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const server = express();
server.use(express.json());

const port = process.env.PORT || 8989;

server.listen(port, () => {
  console.log('Listening to port', port);
});

server.get("/", (req, res) => {
  res.send('Hooray!');
});

server.get("/fibonacci/:number", (req, res) => {
  const upto = req.params.number;
  res.send(fibonacci(upto));
});