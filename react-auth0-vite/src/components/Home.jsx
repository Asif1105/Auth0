import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Home = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const state = searchParams.get("state");
  const [continueUrl] = useState(
    `https://asif-buhari1105.us.auth0.com/continue?state=${state}`
  );
  const history = useNavigate();
  const { isAuthenticated, handleRedirectCallback } = useAuth0();
  return (
    <div>
      <h1> Home Page </h1> <a href={continueUrl}> Continue </a>
    </div>
  );
};

export default Home;
