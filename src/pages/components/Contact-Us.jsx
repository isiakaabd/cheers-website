import { Form, Formik } from "formik/dist";
import { ArrowForward } from "@mui/icons-material";
import { Grid, Button, Typography } from "@mui/material";
import FormikControl from "../../validation/FormikControl";

const ContactUs = () => {
  return (
    <Grid item container sx={{ bgcolor: "#F5F5F5", py: "2rem" }}>
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
        We hoped the FAQs would help. Since they didn't, please fill this short
        form and we'd give you special attention as quickly as possible.
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
  );
};

export default ContactUs;
