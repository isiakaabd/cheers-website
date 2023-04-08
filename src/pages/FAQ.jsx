import { Grid } from "@mui/material";
import Accordions from "./components/Accordions";

import { ContactUs } from "./components";

const FAQ = () => {
  const cc = Array(10)
    .fill(undefined)
    .map((item, idx) => {
      return {
        topic: "What does Cheers do?",
        summary:
          "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.    Aliquam eget maximus est, id dignissim quam.",
      };
    });
  return (
    <Grid item container px={2} py={8} gap={4}>
      <Accordions arr={[...cc]} />
      <ContactUs />
    </Grid>
  );
};

export default FAQ;
