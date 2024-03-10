import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function AccordionExpandIcon({
  title,
  element1,
  element2,
  element3,
}) {
  return (
    <div>
      <Accordion sx={{ boxShadow: 0, marginTop: 0 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontSize: 20, fontWeight: "medium" }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{element1}</AccordionDetails>
        <AccordionDetails>{element2}</AccordionDetails>
        {element3 && <AccordionDetails>{element3}</AccordionDetails>}
      </Accordion>
    </div>
  );
}
