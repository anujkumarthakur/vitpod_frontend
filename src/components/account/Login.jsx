import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { useState } from "react";

const Component = styled(Box)`
  width: 700px;
  background: rgba(255, 255, 255, 0.44);
  margin-left: auto;
  border-radius: 15px;
  margin-right: 50px;
`;
// box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);

const Image = styled("img")({
  width: 200,
  height:200,
  marginRight: "auto",
  marginLeft: "60px",
  // margin:'auto',
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;
const signupInitialValue = {
  name: "",
  username: "",
  password: "",
};

const Login = () => {
  const imageURL = "../vitpod.jpeg"; //'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValue);

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  return (
    <Component>
      <Box>
        <div style={{ display: "flex" }}>
          <Image src={require("../../vitpodlogo.png")} alt="login" />
          <h1 style={{marginRight:150, marginTop:110}}>Welcome Back! <br></br><span>Sign In to continue</span></h1>         
        </div>

        {/* <Image src={imageURL} alt="login" /> */}
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter username" />
            <TextField variant="standard" label="Enter password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>
              CREATE AN ACCOUNT
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter Name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />

            <SignupButton>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an Account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
