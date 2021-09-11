const express = require("express");
const path = require("path");

const server = express();

const routes = require("./routes");

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(express.static("public"));
server.use(routes);

server.listen(3333, () => console.log("Server is Running"));
