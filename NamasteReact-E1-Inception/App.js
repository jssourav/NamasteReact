const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "title",
    key: "t1",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    className: "title2",
    key: "t2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    className: "container",
  },
  [heading, heading2]
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(container);
