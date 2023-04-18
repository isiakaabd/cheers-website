import { Grid, Typography } from "@mui/material";
import { Question2Icon, QuestionIcon } from "@assets";
import Socials from "./components/Socials";
import { ContactUs } from "./components";

const Contact = () => {
  return (
    <Grid item container sx={{ mt: { md: "5rem", sm: "3rem", xs: "1.5rem" } }}>
      <Grid item width="100%">
        <Typography variant="h2" width="100%" textAlign={"center"} gutterBottom>
          We got you covered
        </Typography>
        <Grid item md={8} sm={10} mx="auto">
          <Typography variant="h5">
            Having issues or getting errors, need more information or guidance?
            We are here to help, talk to us
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={10} mx="auto" sm={10} xs={12} py="5rem">
        <Grid item container>
          <Grid item flex={1}>
            <Grid item container gap="2rem" flexDirection={"column"}>
              <Grid item>
                <QuestionIcon sx={{ fontSize: "4rem" }} />
              </Grid>
              <Typography variant="h3" fontWeight={400}>
                General Support{" "}
              </Typography>
              <Typography variant="h5">
                For general enquiries and support, kindly email us at{" "}
                <Typography
                  color={"error"}
                  component={"a"}
                  href="#"
                  sx={{ font: "inherit" }}
                >
                  support@cheers.africa
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid item flex={1}>
            <Grid item container gap="2rem" flexDirection={"column"}>
              <Grid item>
                <Question2Icon sx={{ fontSize: "4rem" }} />
              </Grid>
              <Typography variant="h3">FAQs</Typography>
              <Typography variant="h5">
                Already a user or have questions? Check out our FAQs{" "}
                <Typography
                  color={"error"}
                  component={"a"}
                  href="#"
                  sx={{ font: "inherit" }}
                >
                  here
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{ bgcolor: "rgba(255, 185, 252, 0.39)", py: "6rem" }}
      >
        <Typography variant="h2" textAlign={"center"} width="100%" gutterBottom>
          Join a community with happy people
        </Typography>
        <Typography variant="h5" textAlign={"center"} width="100%" gutterBottom>
          Follow us on socials. Be the first to get Cheers news and all the
          exclusive juicy stuff before anyone else.
        </Typography>
        <Grid item md={3} sm={4} xs={5} mx="auto" my={"2rem"}>
          <Grid item container>
            <Socials />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container sx={{ mt: { md: "4rem", sm: "3rem", xs: "2rem " } }}>
        <ContactUs />
      </Grid>
    </Grid>
  );
};

export default Contact;
