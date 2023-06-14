import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";

export const Promotions = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const state = searchParams.get("state");
  const [continueUrl] = useState(
    `https://asif-buhari1105.us.auth0.com/continue?state=${state}`
  );
  const history = useNavigate();
  const { isAuthenticated, handleRedirectCallback, user } = useAuth0();
  console.log('user', user);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <div>
        <h1> Promotions Page </h1> <a href={continueUrl}> Continue to app to see promotions </a>
      </div>
    </Box>
  );
};

export default Promotions;
