/* 
=> React just a javascript <=
<div id="parent">
  <div id="child">
    <h1>I'am h1 tag</h1>
    <h2>I'am h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'am h1 tag</h1>
    <h2>I'am h2 tag</h2>
  </div>
  
</div>
ReactElement(object) => HTML(Browser Understands)
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
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
