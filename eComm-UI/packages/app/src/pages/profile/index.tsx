import React from "react";
import Button from "@mui/material/Button";
import { CTAButton } from '@shop/dls/src/components/buttons';
import Modal from './modal';

const styles = {
  image: {
    width: "100px",
    heightr: "80px",
  },
};

export const ProfileWrapper = ({children, isAuthenticated}) => {
  return (<Modal>
    {children}
  </Modal>
  )
};

export default ProfileWrapper;
