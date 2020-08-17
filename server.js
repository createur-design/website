const express = require("express");
const sassMiddleware = require("node-sass-middleware");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

const bodyParser = require("body-parser");
// const ngrok = require("ngrok");

const ejs = require("ejs");
// ejs.delimiter = "?";
ejs.openDelimiter = "{{";
ejs.closeDelimiter = "}}";

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: false, // true = .sass and false = .scss
    outputStyle: "compressed",
    sourceMap: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

const user = {
  name: "Christophe",
  email: "cdelobel.ext@simplon.co",
  mdp: 1234,
  isAdmin: false,
};

app.get("/", (req, res) => {
  console.log(user.isAdmin);
  res.render("index", {
    isAdmin: user.isAdmin,
    name: user.name,
    email: user.email,
    mdp: user.mdp,
  });
});
app.post("/", (req, res) => {
  if (req.body.mdp == user.mdp) {
    user.isAdmin = true;
  } else {
    user.isAdmin = false;
  }
  res.render("index", {
    isAdmin: user.isAdmin,
    name: user.name,
    email: user.email,
    mdp: user.mdp,
  });
  // console.log(user.isAdmin);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  // (async function () {
  //   const url = await ngrok.connect();
  //   console.log(url);
  // })();
});
