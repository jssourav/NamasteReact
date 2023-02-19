import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     key: "t1",
//   },
//   "Heading 1 from parcel"
// );

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title2",
//     className: "title2",
//     key: "t2",
//   },
//   "Heading 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     className: "container",
//   },
//   [heading, heading2]
// );

// JSX => React.createElement => HTML(DOM)
const Title = // Creating React Element
  (
    <h1 id="title" key="h1">
      Namaste React
    </h1>
  );

const Title2 = () => (
  <h1 id="title" key="h2">
    Namaste React Title 2
  </h1>
);

// React Components
// Functional
// Class Basedd Component - OLD way of writing code

const HeaderComponent = () => {
  return (
    <div>
      <Title2 />
      {Title2()}
      {Title}
      <h1 id="header" key="h1">
        Namaste React Functional Component
      </h1>
      <h2>React is OP</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
// root.render(heading);
root.render(<HeaderComponent />); // root.render(HeaderComponent());
