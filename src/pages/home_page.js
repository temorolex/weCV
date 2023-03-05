import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/cv.gif";

export const Homepage = () => {
  return (
    <div className="App">
      <div
        className="container1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        
        <img src={Logo} width="100px" style={{ borderRadius: "20px" }} />
        &nbsp; &nbsp;
        <h1><a href="/">WeCV</a></h1>
      </div>
    </div>
  );
};
