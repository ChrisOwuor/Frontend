import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
export default function Alerts({ msg }) {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      {msg}
    </Alert>
  );
}
