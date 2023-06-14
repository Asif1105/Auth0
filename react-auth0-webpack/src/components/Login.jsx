import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";

const theme = createTheme();

export const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const handleSubmit = (event) => {
    event.preventDefault();
    //   const data = new FormData(event.currentTarget);
    //   console.log({
    //     email: data.get("email"),
    //     password: data.get("password"),
    //   });
    loginWithRedirect?.();
  };

  const logOut = (event) => {
    logout?.();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Auth0
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <h1> Login Page </h1>
            {!isAuthenticated && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
