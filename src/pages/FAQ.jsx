import { Grid, Button, Typography } from "@mui/material";
import React from "react";
import Accordions from "./components/Accordions";
import { Form, Formik } from "formik/dist";
import FormikControl from "../validation/FormikControl";
import { ArrowForward } from "@mui/icons-material";

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

      <Grid item container>
        <Typography
          gutterBottom
          variant="h2"
          sx={{ width: "100%", textAlign: "center" }}
        >
          Get in touch with us
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ width: { md: "80%" }, mx: "auto", textAlign: "center" }}
        >
          We hoped the FAQs would help. Since they didn't, please fill this
          short form and we'd give you special attention as quickly as possible.
        </Typography>
        <Grid item sm={8} md={6} xs={12} sx={{ mx: "auto", mt: 3 }}>
          <Grid item container>
            <Formik initialValues={{ name: "", email: "", description: "" }}>
              <Form>
                <Grid item container gap={3}>
                  <Grid item container>
                    <FormikControl name="name" placeholder="Enter Full Name" />
                  </Grid>

                  <Grid item container>
                    <FormikControl name="email" placeholder=" Email Address" />
                  </Grid>
                  <Grid item container>
                    <FormikControl
                      name="description"
                      control={"textarea"}
                      placeholder="Description"
                    />
                  </Grid>
                  <Grid item container>
                    <Button
                      disableElevation
                      endIcon={<ArrowForward />}
                      variant="contained"
                      sx={{
                        color: "#fff",
                        backgroundColor: "#E20489",
                        fontWeight: 700,
                        width: "100%",
                        textTransform: "initial",
                        fontSize: "clamp(1.4rem,8vw,2rem)",
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FAQ;
