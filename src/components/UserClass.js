import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/ankursharma1611");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount;
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ankursharma</h4>
      </div>
    );
  }
}

export default UserClass;

/***
 *
 * ---- MOUNTING ----
 * Constructor(Dummy)
 * Render(Dummy)
 *    <HTML Dummy>
 * Component Did Mount
 *    <API call>
 *    <this.setState> --> State variable is updated
 *
 *  ---UPDATE ----
 *
 *  render(API data)
 *  <HTML {New API Data}>
 *  ComponentDidUpadte
 *
 */
