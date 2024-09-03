import React from "react";
import ReactDOM from "react-dom";

// Lets create the below structure using React native syntax
/*
  <div class="header">
    <ul>Namaste React</ul>
    <ul>
    <li>About us</li>
    <li>Support</li>
    <li>Home</li>
    </ul>
  </div>
*/
// const div = React.createElement("div", { className: "header" }, [
//   React.createElement("ul", { key: "1" }, "Namaste React"),
//   React.createElement("ul", { key: "2" }, [
//     React.createElement("li", { key: "1" }, "About Us"),
//     React.createElement("li", { key: "2" }, "Support"),
//     React.createElement("li", { key: "3" }, "Home"),
//   ]),
// ]);

const heading = <h1>Hello React, I am React Element</h1>;
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h1>Namaste React functional Component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeaderComponent />);
