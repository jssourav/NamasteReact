import React from "react";

class Profile extends React.Component {
  constructor(props) {
    console.log("child - constructor " + props.name);
    super(props);
    // create state
    this.state = {
      userInfo: {
        name: "Dummy Name",
        avatar_url: "Dummy URL",
      },
    };
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("child - componentDidMount " + this.props.name);
    const data = await fetch("https://api.github.com/users/jssourav");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("ComponentWillUnmount");
  }

  render() {
    console.log("child - render " + this.props.name);
    // console.log(this.state.userInfo);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h2>Name: {this.state.userInfo.name}</h2>
      </div>
    );
  }
}

export default Profile;
