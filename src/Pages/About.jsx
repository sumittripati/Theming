import React from "react";
import {
  StyledLoginEmailInput,
  StyledLoginPasswordInput,
  StyledLoginButton,
  StyledCheckbox,
} from "../GlobalStyle";
import { Checkbox } from "@mui/material";

const About = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "30px" }}>
      <h2>Login</h2>
      <StyledLoginEmailInput label="Email" variant="outlined" placeholder="Enter your email" />
      <StyledLoginPasswordInput
        label="Password"
        variant="outlined"
        type="password"
        placeholder="Enter your password"
      />
      <StyledCheckbox control={<Checkbox />} label="Remember me" />
      <StyledLoginButton variant="contained">Login</StyledLoginButton>
    </div>
  );
};

export default About;
