import React from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";


export default function AlerttError({ msg }) {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Alert severity="error" sx={{ mb: 2 }}>
        <AlertTitle>Error</AlertTitle>
        {msg}
      </Alert>
    </Collapse>
  );
}
