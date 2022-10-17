import logo from "./logo.svg";
import "./App.css";
import "./components/account/Login";
import Login from "./components/account/Login";
import Grid from "@mui/material/Grid";
import background from "./background.png"

// const myStyle = {
//   width: "100%",
//   height: "100%",
// };

const myStyle = {
  backgroundImage:`url(${background})`,
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function App() {
  return (
    <div style={myStyle}>
      <div style={{display:"flex"}}>
      <img src={require('./vitpodlogo.png')} style={{width:200, height:200}}/>
      <h1 style={{marginTop:80}}>VitPod</h1>
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
