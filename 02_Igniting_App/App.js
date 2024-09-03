import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement(
  "h1",
  { className: "title" },
  "Namaste React!!"
);
const heading2 = React.createElement(
  "h1",
  { className: "title" },
  "Namaste React 2!!"
);
const div = React.createElement("div", { id: "title" }, [heading, heading2]); // To passin multiple elment we use array.
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(div);
