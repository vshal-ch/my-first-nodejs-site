const express = require("express");
const cntrls = require("../controllers/controller");

const route = express.Router();

route.get("/", cntrls.feeling_get_all);

route.post("/", cntrls.feeling_add);

route.get("/new", (req, res) => {
  res.render("add", { title: "New" });
});

module.exports = route;
