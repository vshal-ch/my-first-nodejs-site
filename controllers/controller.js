// feeling_get_all, feeling_add
const Fling = require("../models/feeling");

const feeling_get_all = (req, res) => {
  Fling.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: "Home",
        feelings: result,
      });
    });
};

const feeling_add = (req, res) => {
  const fling = new Fling(req.body);
  fling
    .save()
    .then((result) => {
      res.redirect("/feelings");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
    feeling_get_all,feeling_add
}