import React from "react";

class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted:", this.state.firstName, this.state.lastName, this.state.email);
    // return(
    //     this.state.firstName
    // )

}

  render() {
    const { firstNameLabel, lastNameLabel, emailLabel } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {firstNameLabel || "First Name"}:
          <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
        </label>
        <label>
          {lastNameLabel || "Last Name"}:
          <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
        </label>
        <label>
          {emailLabel || "Email"}:
          <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
function App() {
    return (
      <div>
        <FormExample firstNameLabel="Given Name" lastNameLabel="Family Name" emailLabel="Email Address" />
      </div>
    );
  }

export default App;
