import React, { useEffect, useState, useRef } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";

export default function AlerttError({ msg }) {
  const [open, setOpen] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    // Component is mounted
    isMounted.current = true;

    return () => {
      // Component will unmount
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      console.log("mount");
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    } else {
      setOpen(false);
      console.log("unmount");
    }
  }, []);

  return (
    <Collapse in={open}>
      <Alert severity="error" sx={{ mb: 2 }}>
        <AlertTitle>Error</AlertTitle>
        {msg}
      </Alert>
    </Collapse>
  );
}
