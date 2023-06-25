import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "by Ankur Sharma"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);
// without using jsx we write code in plain react.

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// console.log(heading); //return an object
console.log(parent); //return an object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
