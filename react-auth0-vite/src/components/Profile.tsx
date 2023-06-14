import React from "react";
import JSONPretty from "react-json-pretty";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const styles = {
  image: {
    width: "100px",
    heightr: "80px",
  },
};

export const Profile = () => {
  const { user, isAuthenticated, logout, error } = useAuth0();
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (isAuthenticated) {
    return (
      <div className="profile-container">
        <h1> Profile Page </h1>
        {user?.name && <h4>{`Name: ${user.name}`}</h4>}
        {user?.email && <h4>{`Email: ${user.email}`}</h4>}
        {user?.picture && (
          <img
            style={{ ...styles.image }}
            src={user.picture}
            alt={user?.name}
          />
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={function () {
            logout?.();
          }}
        >
          Log Out
        </Button>
      </div>
    );
  }
  return null;
};

export default Profile;
