import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./dls/loader/Loader";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);
  const { isLoading, error } = useAuth0();
  const history = useNavigate();

  return (
    <div className="App">
      {" "}
      {error && <p> Authentication error </p>}{" "}
      {!error && isLoading && <Loader />} {!error && !isLoading && <Login />}{" "}
    </div>
  );
}

export default App;
