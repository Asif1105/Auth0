import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Promotions from "./components/Promotions";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import EcommHome from "EcommApp/EcommHome";
import { useAuth0 } from "@auth0/auth0-react";

const domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT_ID;

export const Page = () => {
  const { user, isAuthenticated, logout, error } = useAuth0();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/app" element={<EcommHome>
          <Profile isAuthenticated={isAuthenticated} />
        </EcommHome>} />
      </Routes>
    </Router>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={`${window.location.origin}/app`}
  >
    <Page />
  </Auth0Provider>
);
