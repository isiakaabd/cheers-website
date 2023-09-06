import { Form, Formik } from "formik/dist";
import { ArrowForward } from "@mui/icons-material";
import { Grid, Button, Typography } from "@mui/material";
import FormikControl from "~validation/FormikControl";

const ContactUs = () => {
  return (
    <Grid item container sx={{ bgcolor: "#F5F5F5", py: "4rem" }}>
      <Typography
        gutterBottom
        variant="h2"
        color="text.secondary"
        sx={{ width: "100%", textAlign: "center", fontWeight: 700 }}
      >
        Get in touch with us
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        gutterBottom
        sx={{
          width: { md: "80%" },
          mx: "auto",
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        We hoped the FAQs would help. Since they didn't, please fill this short
        form and we'd give you special attention as quickly as possible.
      </Typography>
      <Grid
        item
        sm={8}
        md={6}
        xs={10}
        sx={{ mx: "auto", mt: { md: "4rem", xs: 3 } }}
      >
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
