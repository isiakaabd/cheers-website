import { Grid, Typography } from "@mui/material";
import { Question2Icon, QuestionIcon } from "~assets";
import Socials from "./components/Socials";
import { ContactUs } from "./components";

const Contact = () => {
  return (
    <Grid item container sx={{ mt: { md: "8rem", sm: "3rem", xs: "1.5rem" } }}>
      <Grid item width="100%">
        <Typography
          variant="h2"
          color="text.secondary"
          width="100%"
          textAlign={"center"}
          gutterBottom
          mb={2}
        >
          We got you covered
        </Typography>
        <Grid item md={9} sm={11} mx="auto">
          <Typography variant="h5" color="text.info" textAlign={"center"}>
            Having issues or getting errors, need more information or guidance?
            We are here to help, talk to us
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={11} mx="auto" sm={10} xs={12} py="5rem">
        <Grid
          item
          container
          gap={{ md: "12rem" }}
          flexDirection={{ sm: "row", xs: "column" }}
        >
          <Grid item flex={1}>
            <Grid item container gap="3rem" flexDirection={"column"}>
              <Grid item container justifyContent={"center"}>
                <QuestionIcon sx={{ fontSize: "4rem" }} />
              </Grid>
              <Typography
                variant="h3"
                sx={{ textAlign: "center" }}
                fontWeight={700}
                color="text.secondary"
              >
                General Support{" "}
              </Typography>
              <Typography
                variant="h5"
                color="text.info"
                sx={{ textAlign: "center", fontWeight: 400 }}
              >
                For general enquiries and support, kindly email us at{" "}
                <Typography
                  color={"error"}
                  component={"a"}
                  href="#"
                  sx={{ font: "inherit" }}
                >
                  hello@cheers.global
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid item flex={1}>
            <Grid item container gap="3rem" flexDirection={"column"}>
              <Grid item container justifyContent={"center"}>
                <Question2Icon sx={{ fontSize: "4rem" }} />
              </Grid>
              <Typography
                variant="h3"
                color="text.secondary"
                sx={{ textAlign: "center", fontWeight: 700 }}
              >
                FAQs
              </Typography>
              <Typography
                variant="h5"
                color="text.info"
                sx={{ textAlign: "center", fontWeight: 400 }}
              >
                Already a user or have questions? Check out our FAQs{" "}
                <Typography
                  color={"error"}
                  component={"a"}
                  href="/#faq"
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
        sx={{ bgcolor: "#FFB9FC63", height: { md: "40.6rem" }, py: "6rem" }}
      >
        <Typography
          variant="h2"
          textAlign={"center"}
          color="text.secondary"
          width="100%"
          gutterBottom
          mb={2}
        >
          Join a community with happy people
        </Typography>
        <Typography
          variant="h5"
          textAlign={"center"}
          color="text.info"
          width="100%"
          sx={{ fontWeight: 400 }}
          gutterBottom
        >
          Follow us on socials. Be the first to get Cheers news and all the
          exclusive juicy stuff before anyone else.
        </Typography>
        <Grid item md={3} sm={4} xs={5} mx="auto" my={"2rem"}>
          <Grid item container justifyContent={"center"}>
            <Socials iconFillColor={"#fff"} fill={"#E20489"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{
          mt: { md: "10rem", sm: "4rem", xs: "3rem " },
          mb: { md: "7rem", xs: "3rem", sm: "4rem" },
        }}
      >
        <ContactUs />
      </Grid>
    </Grid>
  );
};

export default Contact;
