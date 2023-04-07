import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { AddOutlined, AddTaskOutlined } from "@mui/icons-material";

export default function Accordions({ arr }) {
  return (
    <Grid
      item
      container
      gap={2}
      sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
    >
      {arr.map((item, idx) => (
        <Grid item>
          <Accord key={idx} item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
function Accord({ item }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={
          <IconButton
            sx={{
              backgroundColor: "#E20489",
              "&:hover": { backgroundColor: "#E20489" },
              color: "#fff",
            }}
          >
            <AddOutlined />
          </IconButton>
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{item.topic}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{item.summary} </Typography>
      </AccordionDetails>
    </Accordion>
  );
}