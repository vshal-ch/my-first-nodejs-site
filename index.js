const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const flingRoutes = require('./routes/feelingRoute');

const app = express();

const dbURI =
  "mongodb+srv://me:RBElAkEUi1lLtsnI@cluster0.andb4.mongodb.net/MyMongoFirst?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(3000);
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

//register the view engine
app.set("view engine", "ejs");

//middleware and declaring public folder for static files
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
  res.redirect("/feelings");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use('/feelings',flingRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});