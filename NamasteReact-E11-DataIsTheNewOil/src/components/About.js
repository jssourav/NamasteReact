import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import UserContext from "../utils/UserContext";

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
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p>This is the Namaste React Course</p>
        {/* <Outlet /> */}
        <Profile name={"First Child"} />
        {/* <Profile name={"Second Child"} /> */}
      </>
    );
  }
}

export default About;
