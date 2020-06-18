import React, { Component } from "react";
import "./SignIn.scss";
import FormInput from "../Form-Input/Form-Inpute";
import CustomButton from "../Custom-Button/Custom-Button";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefualt();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h3 className="title">Already have an account</h3>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            lable="email"
          />
          
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            lable="password"
          />
         
          <CustomButton>SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
