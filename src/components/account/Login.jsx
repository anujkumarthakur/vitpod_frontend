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
  width: 150,
  height: 150,
  marginRight: "auto",
  marginLeft: "60px",
  // margin:'auto',
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 15px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 0px;
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
          <Image src={require("../../vitpodlogo.png")} alt="login"  />
          <h1 style={{ marginRight: 150, marginTop: 90 }}>Welcome Back! <br></br><span>Sign In to continue</span></h1>
        </div>

        {/* <Image src={imageURL} alt="login" /> */}
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter username" style={{ width: '300px', marginLeft: '300px' }} />
            <TextField variant="standard" label="Enter password" style={{ width: '300px', marginLeft: '300px' }} />
            <LoginButton variant="contained" style={{ width: '300px', marginLeft: '300px' }}>Login</LoginButton>
            <Text style={{ textAlign: "center", marginLeft: '220px' }} >OR</Text>
            <SignupButton onClick={() => toggleSignup()} style={{ width: '300px', marginLeft: '300px' }}>
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
              style={{ width: '300px', marginLeft: '300px' }}
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
              style={{ width: '300px', marginLeft: '300px' }}
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
              style={{ width: '300px', marginLeft: '300px' }}
            />

            <SignupButton style={{ width: '300px', marginLeft: '300px' }}>Signup</SignupButton>
            <Text style={{ textAlign: "center" , marginLeft: '220px'}}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()} style={{ width: '300px', marginLeft: '300px' }}>
              Already have an Account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
