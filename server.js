const express = require("express");
const app = express();

app.set("view engine", "ejs");
const HTTP_PORT = process.env.PORT || 7777;
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

/**Loading animation,
 *  then click '>' button
 *  leads to home/about page */

app.get("/", (req, res) => {
  res.render("index");
});

app.get(["/home"], (req, res) => {
  res.render("home");
});

app.get("/team", (req, res) => {
  res.render("team");
});

app.get("/newsAndEvents", (req, res) => {
  res.render("newsAndEvents");
});

// app.get('/events', (req, res) => {
//   res.render('events');
// });

app.get("/resources", (req, res) => {
  res.render("resources");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
