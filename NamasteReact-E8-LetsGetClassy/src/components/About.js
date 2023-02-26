import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";

// const About = () => {
//   return (
//     <>
//       <h1>About Us Page</h1>
//       <p>This is the Namaste React Course</p>
//       <Outlet />
//       {/* <Profile name={"Sourav"} /> */}
//     </>
//   );
// };

/**
 * parent - constructor
 * parent - render
 * child - constructor
 * child - render
 * child - componentDidMount
 * parent - componentDidMount
 */

class About extends React.Component {
  constructor(props) {
    console.log("parent - constructor");
    super(props);
  }

  componentDidMount() {
    console.log("parent - componentDidMount");
  }

  render() {
    console.log("parent - render");
    return (
      <>
        <h1>About Us Page</h1>
        <p>This is the Namaste React Course</p>
        {/* <Outlet /> */}
        <Profile name={"First Child"} />
        {/* <Profile name={"Second Child"} /> */}
      </>
    );
  }
}

export default About;
