"use strict";

console.log("app.js is running!");

//JSX - JavaScript XML
//generate í scripts á cmd með babel src/app.js --out-file=public/scripts/app.js --presets=env,react
//bæti við --watch aftast til að það hermir eftir, opna bara annan glugga til að keyra
var titles = {
  title: "Indecision app",
  subtitle: "This is info",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    titles.title
  ),
  titles.subtitle && React.createElement(
    "p",
    null,
    titles.subtitle
  ),
  React.createElement(
    "p",
    null,
    titles.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
