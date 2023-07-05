import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
  }

  const data = await fetch("https://api.github.com/users/ankursharma1611")

  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ankursharma</h4>
      </div>
    );
  }
}

export default UserClass;
