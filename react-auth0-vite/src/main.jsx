import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./components/Home";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";

const domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT_ID;

export const Page = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />{" "}
        <Route path="/home" element={<Home />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
      </Routes>{" "}
    </Router>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={`${window.location.origin}/profile`}
  >
    <Page />
  </Auth0Provider>
);
